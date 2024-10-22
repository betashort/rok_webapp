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
                        # UserIDがすでに使われていた場合
            if Account.objects.filter(user_id=request.data['user_name']).exists():
                return Response({'error': "既に存在するuser_nameです。"}, status=HTTP_400_BAD_REQUEST)
            try:
                serializer.save()
            except:
                # データベースエラー
                return Response({'error': 11}, status=HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"success": "アカウント登録に成功しました"}, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    
    def post(self, request, *args, **kwargs):
        user_name = request.data['user_name']
        password = request.data['password']
        exit_user = Account.objects.filter(user_name=user_name)
        serializer = LoginSerializer(instance=exit_user, many=True)
        try:
            if len(serializer.data) == 1:
                if user_name == serializer.data[0]['user_name']:
                    if password == serializer.data[0]['password']:
                        return Response({"role": serializer.data[0]['role']}, status=HTTP_200_OK)    
                return Response({"error": "ログイン失敗"}, status=HTTP_400_BAD_REQUEST)
        except:
            return Response({"error": "ログイン失敗"}, status=HTTP_400_BAD_REQUEST)