from django.db import models

class Comment(models.Model):
    user = models.ForeignKey(on_delete=models.CASCADE)  
    video_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    likes = models.CharField(max_length=255)
    dislikes = models.CharField(max_length=255)
 

class Reply(models.Model):
    user = models.ForeignKey(Comment, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)


