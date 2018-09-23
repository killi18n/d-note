# d-note
This is my react + django note app tutorial guide's repository
[My Tutorial](https://killi8n.com/post/5ba3ab2bb17fd60398c3da3f)
# How To Use

## DJANGO

```bash
cd backend
virtualenv --python=python3 venv
source venv/bin/activate
pip install -r requirements.txt

cd dnote
python manage.py makemigrations
python manage.py migrate

python manage.py runserver
```

## REACT - DEV

```bash
cd frontend
yarn
yarn start
```

## REACT - PROD

```bash
cd build-server
yarn
yarn start
```
