from rest_framework import serializers
from .models import Account

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["user_id", "user_name", "password", "role"]
        extra_kwargs = {'password': {'write_only': True}}
    # def validate(self, data):
    #     #get request data
    #     print(data)
    #     user_id = data.get('user_id')
    #     print(f"user_id: {user_id}")
    #     user_name = data.get('user_name')
    #     password = data.get('password')
    #     confirm_password = data.get('confirm_password')
    #     print(f"password: {password}\nconfirm_password: {confirm_password}")
    #     #is user_id existed?
    #     if not Account.objects.filter(user_id=user_id).exists():
    #         if (password == confirm_password):
    #             return data
    #         else:
    #             raise serializers.ValidationError("確認用パスワードが一致しません")
    #     else:
    #         raise serializers.ValidationError("既に同じユーザ名が存在しています")


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["user_id", "user_name", "password", "role"]
    # def validate(self, data):
    #     user_id = data.get('user_id')
    #     user_name = data.get('user_name')
    #     password = data.get('password')

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["user_id", "user_name", "password", "role"]        
