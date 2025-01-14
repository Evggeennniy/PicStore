from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import BidLot, Bid


# Сигнал, який встановлює початкову ціну для BidLot при створенні
@receiver(post_save, sender=BidLot)
def set_initial_price_for_bidlot(sender, instance, created, **kwargs):
    if created:
        instance.price = instance.starting_price
        instance.save()


# Сигнал, який оновлює ціну BidLot при створенні нової ставки
@receiver(post_save, sender=Bid)
def update_bidlot_price_on_new_bid(sender, instance, created, **kwargs):
    if created:
        bid_lot = instance.lot
        if instance.amount > bid_lot.price:
            bid_lot.price = instance.amount
            bid_lot.save()