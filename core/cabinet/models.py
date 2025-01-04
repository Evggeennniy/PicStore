from django.contrib.auth.models import AbstractUser
from django.db import models

from authentication.models import CustomerUser


class Agreement(models.Model):
    open = models.IntegerField(default=0)
    close = models.IntegerField(default=0)

    def __str__(self):
        return f"Agreement: Open - {self.open}, Close - {self.close}"


class Artist(AbstractUser):
    banner_image = models.ImageField(upload_to='artist_banners/', blank=True, null=True)
    avatar_image = models.ImageField(upload_to='artist_avatars/', blank=True, null=True)
    bio = models.TextField(max_length=1024, blank=True)
    country = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255, blank=True)
    telegram = models.URLField(max_length=200, blank=True)
    instagram = models.URLField(max_length=200, blank=True)
    tik_tok = models.URLField(max_length=200, blank=True)
    agreement = models.OneToOneField(Agreement, on_delete=models.CASCADE, blank=True, null=True)
    experience = models.IntegerField(default=0, blank=True)


    def __str__(self):
        return f"Artist: {self.username}"

class Size(models.Model):
    width = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    height = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return f"Size {self.width}x{self.height}"



class Lot(models.Model):
    author = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='lots')
    name = models.CharField(max_length=255)
    description = models.TextField()
    short_description = models.CharField(max_length=512)
    is_recommend = models.BooleanField(default=False)
    size = models.OneToOneField(Size, on_delete=models.CASCADE, related_name='lot')


class FixedLot(Lot):
    price = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return f"Fixed Lot: {self.name} — {self.price} USD"

class BidLot(Lot):
    starting_price = models.IntegerField(default=0, blank=True)
    auction_end_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Bid Lot: {self.name} — Starting Price: {self.starting_price} USD"

class Bid(models.Model):
    value = models.IntegerField(blank=True, null=True)
    lot = models.ForeignKey(BidLot, on_delete=models.CASCADE, related_name='bids')
    customer_user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE, related_name='bids')

    def __str__(self):
        return f"Bid on {self.lot.name} by {self.customer_user.username} — {self.value} USD"


class RequestOrder(models.Model):
    customer_user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE, related_name='%(class)s_requests')
    requested_at = models.DateTimeField(auto_now_add=True)
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name='orders')

    def __str__(self):
        return f"RequestOrder  {self.lot.name}) by {self.customer_user.username}"

class Question(models.Model):
    customer_user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE, related_name='questions')
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    asked_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"BaseQuestion  {self.lot.name}) by {self.customer_user.username}"


class PropertyName(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='my_properties')
    name = models.IntegerField(blank=True, null=True)


class Property(models.Model):
    name = models.ForeignKey(PropertyName, on_delete=models.CASCADE, related_name='properties')
    value = models.IntegerField(blank=True, null=True)
    lot = models.ForeignKey(Lot, on_delete=models.CASCADE, related_name='properties')