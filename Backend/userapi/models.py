from django.db import models

class user(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    address = models.CharField(max_length=250)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    year_exp = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    year_exp = models.CharField(max_length=100)    
    terms = models.CharField(max_length=100)
    file_path = models.CharField(max_length=250)

    class Meta:
        db_table = "user_details"; 
