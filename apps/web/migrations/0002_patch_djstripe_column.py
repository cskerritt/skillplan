# Generated by Django 5.1.1 on 2024-10-15 09:01

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0001_initial"),
        ("djstripe", "0012_2_8"),
    ]

    operations = [
        migrations.RunSQL(
            "ALTER TABLE djstripe_paymentintent ALTER COLUMN capture_method TYPE varchar(255);"
        ),
    ]
