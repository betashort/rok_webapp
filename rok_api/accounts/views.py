from rest_framework.response import Response
from rest_framework.status import *
from rest_framework.views import APIView

from .models import Account
from .serializers import LoginSerializer, RegisterSerializer

class ResigterView(APIView):
    
    def post(self, request, *args, **kwargs):
        # print(request.data)
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):

            try:
                serializer.save()
            except:
                # データベースエラー
                return Response({'error': 11}, status=HTTP_500_INTERNAL_SERVER_ERROR)

            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            return Response({"detail": "ログイン成功"}, status=HTTP_202_ACCEPTED)
        
        return Response({"error": "ログイン失敗"}, status=HTTP_400_BAD_REQUEST)