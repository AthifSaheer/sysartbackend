from rest_framework.authtoken.views import Token
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Student


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

    #     extra_kwargs = {'password':{
    #         'write_only':True,
    #         'required':True
    #     }}

    # def create(self, validated_data):
    #     print("--------", validated_data)
    #     user = User.objects.create_user(**validated_data)
    #     print("user",user)
    #     Token.objects.create(user=user)
    #     return user
    
class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'
        
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
