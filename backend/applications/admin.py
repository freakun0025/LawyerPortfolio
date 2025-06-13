# backend/applications/admin.py
from django.contrib import admin
from .models import Application

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'university', 'status', 'applied_date')
    search_fields = ('name', 'email', 'university')
    list_filter = ('status', 'position')
    readonly_fields = ('applied_date',)