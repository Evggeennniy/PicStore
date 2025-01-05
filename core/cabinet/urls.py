from django.urls import path, include
from django.urls import path

from . import views


urlpatterns = [
    path('artist/<str:username>/', views.artist_detail, name='artist-detail'),
    path('fixlot/<int:pk>/', views.fixedlot_detail, name='fixlot-detail'),
    path('bidlot/<int:pk>/', views.bidlot_detail, name='bidlot-detail'),
]