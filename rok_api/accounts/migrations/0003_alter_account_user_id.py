# Generated by Django 5.0.7 on 2024-10-21 12:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0002_rename_id_account_user_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="account",
            name="user_id",
            field=models.CharField(max_length=20, primary_key=True, serialize=False),
        ),
    ]
