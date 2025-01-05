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
        bid = lot.get_winner_bid()
        if bid:
            send_telegram_message(
                lot.get_telegram_text_end_for_winner(bid), is_raise_error=True
            )
            lot.create_oreder(bid.bidder)
        else:
            send_telegram_message(
                lot.get_telegram_text_end_not_winner(), is_raise_error=True
            )
        lot.notified = True
        lot.save()
