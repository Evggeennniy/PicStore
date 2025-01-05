from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import (
    Agreement,
    Artist,
    Size,
    FixedLot,
    BidLot,
    Bid,
    RequestOrder,
    Question,
    PropertyName,
    Property,
    LotPhoto,
)


# Agreement Model Configuration
@admin.register(Agreement)
class AgreementAdmin(admin.ModelAdmin):
    list_display = ("id", "open", "close")
    search_fields = ("open", "close")


class LotPhotoInline(admin.TabularInline):  # або admin.StackedInline
    model = LotPhoto
    extra = 1


class FixedLotInline(admin.TabularInline):
    model = FixedLot
    extra = 1


class BidLotInline(admin.TabularInline):
    model = BidLot
    extra = 1


class PropertyNameInline(admin.TabularInline):
    model = PropertyName
    extra = 1


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ("username", "country", "city", "experience")
    search_fields = ("username", "country", "city")
    list_filter = ("country",)
    inlines = [FixedLotInline, BidLotInline, PropertyNameInline]


# Size Model Configuration
@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ("id", "width", "height")
    search_fields = ("width", "height")


class PropertyInline(admin.TabularInline):
    model = Property
    extra = 1  # Додаємо порожній рядок для введення
    fields = ("name", "value")  # Поля, які будуть відображені


# FixedLot Model Configuration
@admin.register(FixedLot)
class FixedLotAdmin(admin.ModelAdmin):
    list_display = ("name", "price")
    search_fields = ("name", "price")
    inlines = [PropertyInline, LotPhotoInline]


class BidInline(admin.TabularInline):
    model = Bid
    extra = 1  # Кількість порожніх рядків для додавання нових ставок
    fields = ("bidder", "value")


# BidLot Model Configuration
@admin.register(BidLot)
class BidLotAdmin(admin.ModelAdmin):
    list_display = ("name", "starting_price", "auction_end_time")
    search_fields = ("name", "starting_price")
    list_filter = ("auction_end_time",)
    inlines = [PropertyInline, BidInline, LotPhotoInline]

    def highest_bid(self, obj):
        # Знаходимо найвищу ставку для цього лоту
        highest_bid = obj.bids.order_by("-value").first()
        return highest_bid.value if highest_bid else "No bids yet"


# PropertyName Model Configuration
@admin.register(PropertyName)
class PropertyNameAdmin(admin.ModelAdmin):
    list_display = ("artist", "name")
    search_fields = ("artist__username",)


@admin.register(RequestOrder)
class RequestOrderAdmin(admin.ModelAdmin):
    list_display = ("lot", "bidder", "requested_at")
    search_fields = ("lot__name", "bidder__username")
    list_filter = ("requested_at",)


# Question Model Configuration
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("lot", "bidder", "asked_at")
    search_fields = ("lot__name", "bidder__username")
    list_filter = ("asked_at",)
