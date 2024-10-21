from rest_framework import serializers
from .models import Account

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["user_id", "user_name", "password", "role"]
        extra_kwargs = {'password': {'write_only': True}}
    
    def validate(self, data):
        #get request data
        user_id = data.get('userId')
        print(user_id)
        user_name = data.get('userName')
        password = data.get('password')
        re_password = data.get('confirmPassword')
        #is user_id existed?
        if not Account.objects.filter(user_id=user_id).exists():
            if (password == re_password):
                return data
            else:
                raise serializers.ValidationError("確認用パスワードが一致しません")
        else:
            raise serializers.ValidationError("既に同じユーザ名が存在しています")


class LoginSerializer(serializers.Serializer):
    class Meta:
        model = Account
        fields = ["user_id", "user_name", "password", "role"]
        extra_kwargs = {'password': {'write_only': True}}
        def create(self, validated_data):
            account = Account.objects.create_user(**validated_data)
            return account
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

