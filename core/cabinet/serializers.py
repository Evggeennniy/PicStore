# filepath: /c:/project/PicStore/core/cabinet/serializers.py
from django.utils import timezone
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import Size, Bid, Artist, Agreement, FixedLot, BidLot, Property, LotPhoto


"""

Serializers Base Class

"""


class PropertiesSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    def get_name(self, obj):
        return obj.get_propertie_name()

    class Meta:
        model = Property
        fields = ["name", "value"]


"""

Serializer for the POST request.

"""


class TakeBidSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bid
        fields = ["amount", "bidder", "lot"]

    def validate(self, data):
        try:
            bid_lot = BidLot.objects.get(pk=data["lot"])
        except BidLot.DoesNotExist:
            raise ValidationError("Bid lot does not exist.")

        if bid_lot.auction_end_time < timezone.now():
            raise ValidationError("Auction has ended.")

        current_price = bid_lot.get_current_price()

        min_step = int(current_price * 0.02)

        if data["amount"] <= current_price + min_step:
            raise ValidationError(
                f"Bid must be higher than {current_price + min_step}."
            )

        return data


"""

Serializers for the Lot model and related models.

"""


class LotPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LotPhoto
        fields = ["photo"]

    def to_representation(self, instance):
        # Повертаємо лише назву файлу замість повного шляху
        representation = super().to_representation(instance)
        representation = instance.photo.name
        return representation


class BidSerializer(serializers.ModelSerializer):
    bidder = serializers.SerializerMethodField()

    class Meta:
        model = Bid
        fields = ["amount", "bidder"]

    def get_bidder(self, obj):
        return obj.get_bidder_name()


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ["width", "height"]


class FixedLotSerializer(serializers.ModelSerializer):
    photos = LotPhotoSerializer(many=True, read_only=True)
    size = SizeSerializer()
    properties = PropertiesSerializer(many=True)

    class Meta:
        model = FixedLot
        fields = [
            "id",
            "name",
            "price",
            "description",
            "is_recommend",
            "price",
            "size",
            "photo",
            "photos",
            "properties",
        ]


class BidLotSerializer(serializers.ModelSerializer):
    photos = LotPhotoSerializer(many=True, read_only=True)
    price = serializers.SerializerMethodField()
    size = SizeSerializer()
    bids = BidSerializer(many=True)
    properties = PropertiesSerializer(many=True)

    class Meta:
        model = BidLot
        fields = [
            "id",
            "name",
            "price",
            "description",
            "is_recommend",
            "price",
            "size",
            "bids",
            "photo",
            "photos",
            "properties",
        ]

    def get_price(self, obj):
        return obj.get_current_price()


"""

Serializers for the Artist model and related models.

"""


class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreement
        fields = ["open", "close"]


class FixedLotArtistSerializer(serializers.ModelSerializer):
    properties = PropertiesSerializer(many=True)

    class Meta:
        model = FixedLot
        fields = [
            "id",
            "name",
            "price",
            "short_description",
            "is_recommend",
            "price",
            "photo",
            "properties",
        ]


class BidLotArtistSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()
    properties = PropertiesSerializer(many=True)

    class Meta:
        model = BidLot
        fields = [
            "id",
            "name",
            "price",
            "short_description",
            "is_recommend",
            "price",
            "photo",
            "properties",
        ]

    def get_price(self, obj):
        return obj.get_current_price()


class ArtistSerializer(serializers.ModelSerializer):
    agreement = AgreementSerializer()
    fixed_lots = FixedLotArtistSerializer(many=True)
    bid_lots = BidLotArtistSerializer(many=True)

    class Meta:
        model = Artist
        fields = [
            "username",
            "first_name",
            "last_name",
            "banner_image",
            "avatar_image",
            "bio",
            "country",
            "city",
            "telegram",
            "instagram",
            "tik_tok",
            "experience",
            "agreement",
            "fixed_lots",
            "bid_lots",
        ]
