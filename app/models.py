from django.db import models


gender = [
    ("Male","Male"),
    ('Female',"Female"),
]

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=100, choices=gender)
    address = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Name: ' + self.name

