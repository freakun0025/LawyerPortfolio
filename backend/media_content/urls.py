# backend/media_content/urls.py
from django.urls import path
from .views import MediaItemListView

urlpatterns = [
    path('media/', MediaItemListView.as_view(), name='media-list'),
]