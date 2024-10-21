from rest_framework.response import Response
from rest_framework.status import *
from rest_framework.views import APIView

from .models import Account
from .serializers import LoginSerializer, RegisterSerializer

class ResigterView(APIView):
    
    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            if serializer.validated_data['password'] != request.data['confirm_password']:
                return Response({'error': "確認用パスワードが一致しません。"}, status=HTTP_400_BAD_REQUEST)

            # UserIDがすでに使われていた場合
            if Account.objects.filter(user_id=request.data['user_id']).exists():
                return Response({'error': "既に存在するIDです。"}, status=HTTP_400_BAD_REQUEST)
            try:
                serializer.save()
            except:
                # データベースエラー
                return Response({'error': 11}, status=HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"success": "アカウント登録に成功しました"}, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            return Response({"detail": "ログイン成功"}, status=HTTP_202_ACCEPTED)
        
        return Response({"error": "ログイン失敗"}, status=HTTP_400_BAD_REQUEST)