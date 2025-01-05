from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Artist, FixedLot, BidLot
from .serializers import ArtistSerializer, FixedLotSerializer, BidLotSerializer
# Create your views here.
@api_view(['GET'])
def artist_detail(request, username):
    artist = get_object_or_404(Artist.objects.prefetch_related('agreement', 'fixed_lots', 'bid_lots'), username=username)
    serializer = ArtistSerializer(artist)
    return Response(serializer.data)


@api_view(['GET'])
def fixedlot_detail(request, pk):
    fixed_lot = get_object_or_404(FixedLot.objects.prefetch_related('size'), pk=pk)
    serializer = FixedLotSerializer(fixed_lot)
    return Response(serializer.data)

@api_view(['GET'])
def bidlot_detail(request, pk):
    bid_lot = get_object_or_404(BidLot.objects.prefetch_related('bids','size'), pk=pk)
    serializer = BidLotSerializer(bid_lot)
    return Response(serializer.data)