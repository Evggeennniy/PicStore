from django.contrib.auth.models import AbstractUser
from django.db import models

from authentication.models import CustomerUser
import rest_framework


class Agreement(models.Model):
    open = models.IntegerField(default=0)
    close = models.IntegerField(default=0)

    def __str__(self):
        return f"Agreement: Open - {self.open}, Close - {self.close}"


class Artist(AbstractUser):
    banner_image = models.ImageField(upload_to="banners/")
    avatar_image = models.ImageField(upload_to="avatars/")
    bio = models.TextField(max_length=1024)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    telegram = models.URLField(max_length=200, blank=True, null=True)
    instagram = models.URLField(max_length=200, blank=True, null=True)
    tik_tok = models.URLField(max_length=200, blank=True, null=True)
    agreement = models.OneToOneField(Agreement, on_delete=models.CASCADE)
    experience = models.IntegerField(default=1)

    def __str__(self):
        return f"Artist: {self.username}"


class Size(models.Model):
    width = models.IntegerField(default=15)
    height = models.IntegerField(default=15)

    def __str__(self):
        return f"Size {self.width}x{self.height}"


class Lot(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    short_description = models.CharField(max_length=512)
    is_recommend = models.BooleanField(default=False)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, related_name="lot")
    photo = models.ImageField(upload_to="lot/main/")

    def __str__(self):
        return self.name


class LotPhoto(models.Model):
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="photos")
    photo = models.ImageField(upload_to="lot/additional/")

    def __str__(self):
        return f"Photo for {self.lot.name}"


class FixedLot(Lot):
    author = models.ForeignKey(
        Artist, on_delete=models.CASCADE, related_name="fixed_lots"
    )
    price = models.IntegerField(default=1000)

    def __str__(self):
        return f"Fixed Lot: {self.name} — {self.price} USD"


class BidLot(Lot):
    author = models.ForeignKey(
        Artist, on_delete=models.CASCADE, related_name="bid_lots"
    )
    starting_price = models.IntegerField(default=1000)
    auction_end_time = models.DateTimeField()
    notified = models.BooleanField(default=False)

    def __str__(self):
        return f"Bid Lot: {self.name} — Starting Price: {self.starting_price} USD"

    def get_current_price(self):
        highest_bid = self.bids.order_by("-amount").first()
        if highest_bid:
            return highest_bid.amount
        return self.starting_price

    def get_winner_bid(self):
        return self.bids.order_by("-amount").first()

    def get_telegram_text_end_for_winner(self, highest_bid):
        return (
            f"✅Аукціон закінчився! №{self.id} {self.name}\n"
            f"🏆Перемежець {highest_bid.bidder.username} — {self.bidder.amount} USD"
        )

    def get_telegram_text_end_not_winner(self, highest_bid):
        return (
            f"😭Аукціон закінчився! №{self.id} {self.name}\n" f"☃️Перемежець відсутній"
        )

    def create_oreder(self, user):
        request_order = RequestOrder.objects.create(buyer_id=user.id, lot_id=self.id)
        send_telegram_message(request_order.get_telegram_text(is_raise_error=True))


class Bid(models.Model):
    amount = models.IntegerField()
    lot = models.ForeignKey(BidLot, on_delete=models.CASCADE, related_name="bids")
    bidder = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name="bids"
    )

    def __str__(self):
        return f"Bid on {self.lot.name} by {self.bidder.username} — {self.amount} USD"

    def get_bidder_name(self):
        return self.bidder.username


class RequestOrder(models.Model):
    buyer = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name="requests"
    )
    requested_at = models.DateTimeField(auto_now_add=True)
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="orders")

    def __str__(self):
        return f"RequestOrder  {self.lot.name}) by {self.buyer.username}"

    def get_telegram_text(self):
        return (
            f"📝Замовлення №{self.id}/{self.lot.id} {self.lot.name}\n"
            f"👤 {self.buyer.username}\n {self.buyer.email}\n {self.buyer.phone_number}\n{self.buyer.first_name} {self.buyer.last_name}"
        )


class Question(models.Model):
    buyer = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name="questions"
    )
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="questions")
    question_text = models.TextField(blank=True, null=True)
    asked_at = models.DateTimeField(auto_now_add=True)

    def get_telegram_text(self):
        return f"❓№{self.id}\{self.lot.id} \n{self.lot.name}) \n{self.buyer.username}\n {self.buyer.email}\n {self.buyer.phone_number}\n{self.buyer.first_name} {self.buyer.last_name}"


class PropertyName(models.Model):
    artist = models.ForeignKey(
        Artist,
        on_delete=models.CASCADE,
        related_name="my_properties",
        blank=True,
        null=True,
    )
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Property(models.Model):
    name = models.ForeignKey(
        PropertyName, on_delete=models.CASCADE, related_name="properties"
    )
    value = models.CharField(max_length=64)
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="properties")

    def get_propertie_name(self):
        return self.name.name

    def __str__(self):
        return f"{self.name.name} - {self.value}"
