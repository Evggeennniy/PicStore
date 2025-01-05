# cabinet/tasks.py
from celery import shared_task
from django.utils import timezone
from .models import BidLot
from .utils import send_telegram_message

@shared_task
def check_auction_end_and_notify():
    expired_lots = BidLot.objects.filter(
        auction_end_time__lt=timezone.now(), notified=False
    )

    for lot in expired_lots:
        send_telegram_message(lot.get_telegram_text_end())
        lot.notified = True
        lot.save()
