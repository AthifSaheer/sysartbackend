from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from .serializers import UserSerializer, TokenSerializer, StudentSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import status
from .models import Student

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST', 'GET'])
def home(request, code):
    if request.method == 'GET':
        try:
            if code == 'sysartb':
                queryset = Student.objects.using('sysartb').all()
            else:
                queryset = Student.objects.all()

            serializer = StudentSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Student.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', 'GET'])
def register(request):
    if request.method == 'GET':
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']

        if request.data['code'] == "sysartb":
            if User.objects.using('sysartb').filter(username=username).exists():
                data = {"already exist" : "already exist"}
                return Response(data, status=status.HTTP_201_CREATED)

            user = User.objects.using('sysartb').create(username=username, email=email, password=password)
            auth_login(request, user)

            token = Token.objects.using('sysartb').create(user=user)
            srlzr = TokenSerializer(token)

        else:
            if User.objects.filter(username=username).exists():
                data = {"already exist" : "already exist"}
                return Response(data, status=status.HTTP_201_CREATED)
            user = User()
            user.username = username
            user.email = email
            user.password = password
            user.save()
            auth_login(request, user)

            token = Token.objects.create(user=user)
            srlzr = TokenSerializer(token)

        return Response(srlzr.data, status=status.HTTP_201_CREATED)


@api_view(['POST', 'GET'])
def login(request):
    if request.method == 'GET':
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        # username = request.data['username']
        print("--------", request.data)
        email = request.data['email']
        password = request.data['password']

        try:
            if request.data['code'] == "sysartb":
                user = User.objects.using('sysartb').get(email=email)
                auth_login(request, user)
                token = Token.objects.using('sysartb').get(user=user)
                srlzr = TokenSerializer(token)

            else:
                user = User.objects.get(email=email)
                auth_login(request, user)
                token = Token.objects.get(user=user)
                srlzr = TokenSerializer(token)

        except User.DoesNotExist:
            data = {"nouser" : "nouser"}
            return Response(data, status=status.HTTP_201_CREATED)

        return Response(srlzr.data, status=status.HTTP_201_CREATED)

