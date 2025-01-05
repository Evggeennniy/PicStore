from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Artist
from .serializers import ArtistSerializer

# Create your views here.
@api_view(['GET'])
def artist_detail(request, username):
    artist = get_object_or_404(Artist.objects.prefetch_related('agreement', 'fixed_lots', 'bid_lots'), username=username)
    serializer = ArtistSerializer(artist)
    return Response(serializer.data)