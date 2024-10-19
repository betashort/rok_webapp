from rest_framework import serializers
from .models import AooHold, AooRegister

class AooHoldSerializer(serializers.ModelSerializer):
    class Meta:
        model = AooHold
        fields = ["id", "title"]
    
class AooRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = AooRegister
        exclude = ["created_at"]
    def validate(self, data):
        password = data.get("password")
        if password != "2143":
            raise serializers.ValidationError(
                "パスワードが違います。"
            )
        return data

class AooMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = AooRegister
        fields = ["id", "user_name", "aoo_id", "user_position"]