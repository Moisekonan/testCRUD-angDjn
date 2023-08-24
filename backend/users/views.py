from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializer import UserSerializer

# recuperer tous les utilisateurs - GET, POST
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# recuperer un utilisateur par son id - GET, PUT, DELETE
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Bonjour à tous le monde
def helloWorld(HttpRequest):
    return HttpResponse("Hello World")