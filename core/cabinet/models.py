from django.contrib.auth.models import AbstractUser
from django.db import models

from authentication.models import CustomerUser


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
    main_photo = models.ImageField(upload_to="lot/main/")

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

    def __str__(self):
        return f"Bid Lot: {self.name} — Starting Price: {self.starting_price} USD"

    def get_current_price(self):
        highest_bid = self.bids.order_by("-value").first()
        if highest_bid:
            return highest_bid.value
        return self.starting_price


class Bid(models.Model):
    value = models.IntegerField()
    lot = models.ForeignKey(BidLot, on_delete=models.CASCADE, related_name="bids")
    customer_user = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name="bids"
    )

    def __str__(self):
        return f"Bid on {self.lot.name} by {self.customer_user.username} — {self.value} USD"

    def get_customer_name(self):
        return self.customer_user.username


class RequestOrder(models.Model):
    customer_user = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name="requests"
    )
    requested_at = models.DateTimeField(auto_now_add=True)
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="orders")

    def __str__(self):
        return f"RequestOrder  {self.lot.name}) by {self.customer_user.username}"


class Question(models.Model):
    customer_user = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name="questions"
    )
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="questions")
    question_text = models.TextField()
    asked_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"BaseQuestion  {self.lot.name}) by {self.customer_user.username}"


class PropertyName(models.Model):
    artist = models.ForeignKey(
        Artist,
        on_delete=models.CASCADE,
        related_name="my_properties",
        blank=True,
        null=True,
    )
    name = models.CharField(max_length=64)


class Property(models.Model):
    name = models.ForeignKey(
        PropertyName, on_delete=models.CASCADE, related_name="properties"
    )
    value = models.IntegerField()
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name="properties")
