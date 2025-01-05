from django.urls import path, include
from django.urls import path

from . import views


urlpatterns = [
     path('<str:username>/', views.artist_detail, name='artist-detail'),
]