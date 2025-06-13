# backend/applications/views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Application
from .serializers import ApplicationSerializer
from django.core.mail import send_mail
from django.conf import settings

class ApplicationSubmitView(APIView):
    def post(self, request, format=None):
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            application = serializer.save()
            
            # Send email notification
            subject = f"New Internship Application: {application.name}"
            message = f"""
            New application received:
            
            Name: {application.name}
            Email: {application.email}
            Phone: {application.phone}
            University: {application.university}
            Position: {application.position}
            Start Date: {application.start_date}
            
            Please login to the backend to view the full application details.
            """
            from_email = settings.DEFAULT_FROM_EMAIL
            recipient_list = ['john@smithlaw.com']  # The lawyer's email
            
            send_mail(subject, message, from_email, recipient_list)
            
            return Response({'status': 'success'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)