# PicStore web shop & auction of paintings
```
myenv\Scripts\activate
```

```
pip install -r requirements.txt
```
```
python manage.py runserver
```
```
python manage.py test authentication
```
```
celery -A settings worker --pool=solo -l INFO
```
для запуску з бд
```
celery -A settings beat -l INFO --scheduler django_celery_beat.schedulers:DatabaseScheduler
```
для хардкод запуску
```
celery -A settings beat -l INFO

```