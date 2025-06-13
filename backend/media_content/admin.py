# backend/media_content/admin.py
from django.contrib import admin
from .models import MediaItem

@admin.register(MediaItem)
class MediaItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date', 'location')
    search_fields = ('title', 'description')
    list_filter = ('category', 'date')