from rest_framework import serializers
from .models import AooHold, AooRegister

class AooHoldSerializer(serializers.ModelSerializer):
    class Meta:
        model = AooHold
        fields = ["id", "title"]
    
class AooRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = AooRegister
        fields = ["aoo_id", "user_name",  "user_paticipation", "user_position"]