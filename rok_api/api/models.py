import uuid
from django.db import models


class AooHold(models.Model):
    #table name
    class Meta:
        db_table = "AOO_HOLD"
    
    #id
    id = models.UUIDField(verbose_name="ID", primary_key=True, default=uuid.uuid4, editable=False)
    #aoo title
    title = models.CharField(verbose_name="AOO開催タイトル", max_length=50)
    #create date
    created_at = models.DateTimeField(verbose_name="登録日", auto_now_add=True)
    
class AooRegister(models.Model):
    
    class Meta:
        db_table = "AOO_REGISTER"
    
    #id
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #aoo id
    aoo_id = models.ForeignKey(AooHold,on_delete=models.PROTECT)
    #usre name
    user_name = models.CharField(verbose_name="ユーザ名", max_length=20)
    #user paticipation
    user_participation = models.BooleanField(verbose_name="参加可否",  null=True, blank=True)
    #user position
    user_position = models.CharField(verbose_name="ポジション", max_length=20, null=True, blank=True)
    #created date
    created_at = models.DateTimeField(verbose_name="登録日", auto_now_add=True)