# backend/media_content/views.py
from rest_framework import generics
from .models import MediaItem
from .serializers import MediaItemSerializer

class MediaItemListView(generics.ListAPIView):
    queryset = MediaItem.objects.all().order_by('-date')
    serializer_class = MediaItemSerializer
    
    def get_queryset(self):
        category = self.request.query_params.get('category', None)
        if category and category.lower() != 'all':
            return MediaItem.objects.filter(category=category).order_by('-date')
        return MediaItem.objects.all().order_by('-date')