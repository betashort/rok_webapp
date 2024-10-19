from rest_framework import status, views
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .models import AooHold, AooRegister
from .serializers import AooHoldSerializer, AooMemberSerializer, AooRegisterSerializer


class AooHoldAPIView(views.APIView):
    
    def get(self, request, *args, **kwargs):
        #一覧を取得する
        aoo_hold_list = AooHold.objects.all()
        #シリアライズする
        serializer = AooHoldSerializer(instance = aoo_hold_list, many=True)
        #レスポンスを返す
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        #シリアライズする
        serializer = AooHoldSerializer(data=request.data)
        #バリデーションチェックする
        serializer.is_valid(raise_exception=True)
        #データを登録する
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)
    
    def delete(self, request, pk, *args, **kwargs):
        # aoo_hold = AooHold.objects.get(id=pk)
        # serializer = AooHoldSerializer(data=aoo_hold)
        # serializer.is_valid(raise_exception=True)
        aoo_hold = get_object_or_404(AooHold, pk=pk)
        aoo_hold.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class AooRegisterAPI(views.APIView):
    
    def post(self, request, *args, **kwargs):
        #シリアライズする
        serializer = AooRegisterSerializer(data=request.data)
        #バリデーションチェックする
        serializer.is_valid(raise_exception=True)
        #データを登録する
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)

class AooRegisterMemberAPI(views.APIView):
    
    def get(self, request, pk, *args, **kwargs):
        #pkと一致する一覧を取得する
        aoo_register_members = AooRegister.objects.filter(aoo_id=pk, user_participation=True)
        #シリアライズする
        serializer = AooMemberSerializer(instance=aoo_register_members, many=True)
        #レスポンスを返す
        return Response(serializer.data)
    
    def update(self, request, pk, *args, **kwargs):
        return
    
    def delete(self, request, pk, *args, **kwargs):
        return
    