from django.db import models

# Create your models here.
class Account(models.Model):
    
    class Meta:
        db_table = "Accounts"
    
    #id
    user_id = models.CharField(primary_key=True, max_length=20)
    #user name
    user_name = models.CharField(verbose_name="user name", max_length=20)
    #password
    password = models.CharField(verbose_name="password", max_length=50)
    #role
    role = models.CharField(verbose_name="role", max_length=20)
    
    def __str__(self):
        return self.user_name