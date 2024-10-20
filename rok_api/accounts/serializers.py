from rest_framework import serializers
from .models import Account

class LoginSerializer(serializers.Serializer):
    user_id = serializers.CharField(max_length=20, write_only=True)
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        user_id = data.get('user_id')
        password = data.get('password')
        userid = Account.objects.get(user_id=user_id)
        re_password = Account.objects.get(password=password)
        if (user_id == userid.user_id):
            if (password == re_password):
                return data
            
            else:
                raise serializers.ValidationError("ログイン失敗")

