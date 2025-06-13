# backend/testimonials/models.py
from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='testimonials/', null=True, blank=True)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    date = models.DateField()
    service = models.CharField(max_length=100)
    testimonial = models.TextField()
    case = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.service}"