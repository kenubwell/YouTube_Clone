from django.contrib import admin
from .models import Comment, Reply

admin.site.register(Comment) #this will permit Admin Center interface with our database/table
admin.site.register(Reply) 
