# Generated by Django 4.2.4 on 2023-08-23 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('genre', models.CharField(max_length=10)),
            ],
        ),
    ]
