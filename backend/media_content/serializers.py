# backend/media_content/serializers.py
from rest_framework import serializers
from .models import MediaItem
from django.conf import settings

class MediaItemSerializer(serializers.ModelSerializer):
    imageUrl = serializers.SerializerMethodField()
    
    class Meta:
        model = MediaItem
        fields = ['id', 'title', 'description', 'full_description', 'image', 'date', 'location', 'category', 'created_at', 'imageUrl']
    
    def get_imageUrl(self, obj):
        if obj.image:
            return f"http://localhost:8000{obj.image.url}"
        return None