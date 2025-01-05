# filepath: /c:/project/PicStore/core/cabinet/serializers.py
from rest_framework import serializers
from authentication.models import CustomerUser
from .models import Size, Bid, Artist, Agreement, FixedLot, BidLot, Property

class BidSerializer(serializers.ModelSerializer):
    customer = serializers.SerializerMethodField()

    class Meta:
        model = Bid
        fields = ['value', 'customer']

    def get_customer(self, obj):
        return obj.get_customer_name()


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['width', 'height']

class FixedLotSerializer(serializers.ModelSerializer):
    size = SizeSerializer()
    class Meta:
        model = FixedLot
        fields = ['id', 'name', 'price', 'description', 'is_recommend', 'price']

class BidLotSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()
    size = SizeSerializer()
    bids = BidSerializer(many=True)

    class Meta:
        model = BidLot
        fields = ['id', 'name', 'price', 'description', 'is_recommend', 'price', 'size', 'bids']
    
    def get_price(self, obj):
        return obj.get_current_price()

"""

Serializers for the Artist model and related models.

"""

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['name']

class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreement
        fields = ['open', 'close']

class FixedLotArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = FixedLot
        fields = ['id', 'name', 'price', 'short_description', 'is_recommend', 'price']

class BidLotArtistSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()
    
    class Meta:
        model = BidLot
        fields = ['id', 'name', 'price', 'short_description', 'is_recommend', 'price']
    
    def get_price(self, obj):
        return obj.get_current_price()

class ArtistSerializer(serializers.ModelSerializer):
    agreement = AgreementSerializer()
    fixed_lots = FixedLotArtistSerializer(many=True)
    bid_lots = BidLotArtistSerializer(many=True)
    my_properties = PropertySerializer(many=True)

    class Meta:
        model = Artist
        fields = [
            'username', 'first_name', 'last_name', 'banner_image', 'avatar_image', 
            'bio', 'country', 'city', 'telegram', 'instagram', 'tik_tok', 
            'experience', 'agreement','fixed_lots', 'bid_lots', 'my_properties'
        ]