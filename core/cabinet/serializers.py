# filepath: /c:/project/PicStore/core/cabinet/serializers.py
from rest_framework import serializers
from authentication.models import CustomerUser
from .models import Size, Bid, Artist, Agreement, FixedLot, BidLot, Property, LotPhoto

"""

Serializers Base Class

"""


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
    customer = serializers.SerializerMethodField()

    class Meta:
        model = Bid
        fields = ["value", "bidder_name"]

    def get_bidder(self, obj):
        return obj.get_bidder_name()


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ["width", "height"]


class FixedLotSerializer(serializers.ModelSerializer):
    photos = LotPhotoSerializer(many=True, read_only=True)
    size = SizeSerializer()

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
        ]


class BidLotSerializer(serializers.ModelSerializer):
    photos = LotPhotoSerializer(many=True, read_only=True)
    price = serializers.SerializerMethodField()
    size = SizeSerializer()
    bids = BidSerializer(many=True)

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
        ]


class BidLotArtistSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()

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
