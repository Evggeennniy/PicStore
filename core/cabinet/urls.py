from django.urls import path, include
from django.urls import path

from . import views


urlpatterns = [
    path("artist/<str:username>/", views.artist_detail, name="artist-detail"),
    path("fixlot/<int:pk>/", views.fixedlot_detail, name="fixlot-detail"),
    path("fixlot/<int:pk>/buy/", views.buy, name="buy"),
    path("bidlot/<int:pk>/", views.bidlot_detail, name="bidlot-detail"),
    path("bidlot/<int:pk>/bid/", views.place_bid, name="bid"),
    path("lot/<int:pk>/question/", views.question, name="question"),
]
