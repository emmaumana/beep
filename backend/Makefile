
venv: 
	source ~/Desktop/Projects/beep/venv/bin/activate

superuser: 
	python manage.py createsuperuser

user: 
	python manage.py createuser

check:
	python manage.py check

migrations:
	python manage.py makemigrations

migrate:
	python manage.py migrate

server:
	python manage.py runserver

shell:
	python manage.py shell

# coverage scripts
html:
	coverage html

test:
	coverage run --omit='*/venv/*,*/migrations/*,*/__init__.py,*/tests/*' manage.py test $(path)