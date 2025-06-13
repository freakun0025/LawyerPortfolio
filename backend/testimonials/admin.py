# backend/testimonials/admin.py
from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'service', 'rating', 'date')
    search_fields = ('name', 'testimonial', 'service')
    list_filter = ('rating', 'service')