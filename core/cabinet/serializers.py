# filepath: /c:/project/PicStore/settings/cabinet/serializers.py
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

        min_step = int(bid_lot.price * 0.2)

        if data["amount"] <= bid_lot.price + min_step:
            raise ValidationError(
                f"Bid must be higher than {bid_lot.price + min_step}."
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
            "description",
            "is_recommend",
            "view_count",
            "price",
            "size",
            "photo",
            "photos",
            "properties",
        ]


class BidLotSerializer(serializers.ModelSerializer):
    photos = LotPhotoSerializer(many=True, read_only=True)
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
            "view_count",
            "size",
            "bids",
            "photo",
            "photos",
            "properties",
            "auction_end_time",
        ]



"""

Serializers for the Artist model and related models.

"""

class FixedLotArtistSerializer(serializers.ModelSerializer):
    properties = PropertiesSerializer(many=True)
    size = SizeSerializer()

    class Meta:
        model = FixedLot
        fields = [
            "id",
            "name",
            "price",
            "size",
            "short_description",
            "is_recommend",
            "view_count",
            "photo",
            "properties",
        ]


class BidLotArtistSerializer(serializers.ModelSerializer):
    properties = PropertiesSerializer(many=True)
    size = SizeSerializer()

    class Meta:
        model = BidLot
        fields = [
            "id",
            "name",
            "price",
            "size",
            "short_description",
            "is_recommend",
            "view_count",
            "photo",
            "properties",
        ]



class ArtistSerializer(serializers.ModelSerializer):
    fixed_lots = FixedLotArtistSerializer(many=True)
    bid_lots = BidLotArtistSerializer(many=True)

    class Meta:
        model = Artist
        fields = [
            "username",
            "first_name",
            "last_name",
            "banner",
            "avatar",
            "bio",
            "country",
            "city",
            "telegram",
            "instagram",
            "tik_tok",
            "experience",
            "agreement_open",
            "agreement_close",
            "view_count",
            "fixed_lots",
            "bid_lots",
        ]
