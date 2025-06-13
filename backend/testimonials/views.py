# backend/testimonials/views.py
from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.all().order_by('-date')
    serializer_class = TestimonialSerializer