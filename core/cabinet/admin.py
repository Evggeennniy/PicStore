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

class LotPhotoInline(admin.TabularInline):  # або admin.StackedInline
    model = LotPhoto
    extra = 1


class FixedLotInline(admin.TabularInline):
    model = FixedLot
    readonly_fields = ("view_count",)
    extra = 1


class BidLotInline(admin.TabularInline):
    model = BidLot
    readonly_fields = ("price", "view_count")
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
    extra = 0
    fields = ("name", "value")  # Поля, які будуть відображені


# FixedLot Model Configuration
@admin.register(FixedLot)
class FixedLotAdmin(admin.ModelAdmin):
    list_display = ("name", "price")
    search_fields = ("name", "price")
    inlines = [PropertyInline, LotPhotoInline]
    readonly_fields = ("view_count",)


class BidInline(admin.TabularInline):
    model = Bid
    extra = 0   # Кількість порожніх рядків для додавання нових ставок
    fields = ("bidder", "amount")
    readonly_fields = ("bidder", "amount")

    can_delete = False

    # Заборонити додавання
    def has_add_permission(self, request, obj=None):
        return False

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.order_by('-amount')


# BidLot Model Configuration
@admin.register(BidLot)
class BidLotAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "starting_price", "auction_end_time")
    search_fields = ("name", "price", "starting_price")
    list_filter = ("auction_end_time",)
    readonly_fields = ("price", "view_count")
    inlines = [PropertyInline, BidInline, LotPhotoInline]


# PropertyName Model Configuration
@admin.register(PropertyName)
class PropertyNameAdmin(admin.ModelAdmin):
    list_display = ("artist", "name")
    search_fields = ("artist__username",)


@admin.register(RequestOrder)
class RequestOrderAdmin(admin.ModelAdmin):
    list_display = ("lot", "buyer", "requested_at")
    search_fields = ("lot__name", "buyer__username")
    list_filter = ("requested_at",)


# Question Model Configuration
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("lot", "buyer", "asked_at")
    search_fields = ("lot__name", "buyer__username")
    list_filter = ("asked_at",)
