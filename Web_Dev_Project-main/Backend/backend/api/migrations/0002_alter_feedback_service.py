# Generated by Django 3.2 on 2021-04-27 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='service',
            field=models.CharField(max_length=100),
        ),
    ]
