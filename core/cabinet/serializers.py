# filepath: /c:/project/PicStore/core/cabinet/serializers.py
from rest_framework import serializers
from .models import Artist, Agreement, FixedLot, BidLot, Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['name']

class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreement
        fields = ['open', 'close']

class FixedLotSerializer(serializers.ModelSerializer):
    class Meta:
        model = FixedLot
        fields = '__all__'

class BidLotSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()
    
    class Meta:
        model = BidLot
        fields = '__all__'

    def get_price(self, obj):
        return obj.get_current_price()

class ArtistSerializer(serializers.ModelSerializer):
    agreement = AgreementSerializer()
    fixed_lots = FixedLotSerializer(many=True)
    bid_lots = BidLotSerializer(many=True)
    my_properties = PropertySerializer(many=True)

    class Meta:
        model = Artist
        fields = [
            'username', 'first_name', 'last_name', 'banner_image', 'avatar_image', 
            'bio', 'country', 'city', 'telegram', 'instagram', 'tik_tok', 
            'experience', 'agreement','fixed_lots', 'bid_lots', 'my_properties'
        ]