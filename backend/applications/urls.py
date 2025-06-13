# backend/applications/urls.py
from django.urls import path
from .views import ApplicationSubmitView

urlpatterns = [
    path('applications/submit/', ApplicationSubmitView.as_view(), name='application-submit'),
]