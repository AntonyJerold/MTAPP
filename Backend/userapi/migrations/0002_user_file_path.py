# Generated by Django 3.1.7 on 2021-09-05 16:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('userapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='file_path',
            field=models.CharField(default=django.utils.timezone.now, max_length=250),
            preserve_default=False,
        ),
    ]
