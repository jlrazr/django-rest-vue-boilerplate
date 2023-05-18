## django-vue-boilerplate
A boilerplate for applications made with Django Rest Framework and VueJS.

### Prerequisites
- [X] Python >= 3.8 - [link](https://www.python.org/downloads/)
- [X] Pipenv - [link](https://pipenv.readthedocs.io/en/latest/)
- [X] Node >= 16.0 - [link](https://nodejs.org/en/)

### Backend Install
1. $cd backend
2. $pipenv shell
3. $pipenv install

### Frontend Install
1. $cd frontend
2. $npm install

### Running Development Servers
Frontend:
1. $cd frontend/client-app/
2. $npm run dev

Backend:
1. $cd backend/
2. $python manage.py runserver

#### Build

### Deploy

### Template Structure

| Location                         |  Content                                   |
|----------------------------------|--------------------------------------------|
| `/backend`                       | Django Project & Backend Config            |
| `/backend/api`                   | Django App (`/api`)                        |
| `/frontend`                      | Vue App .                                  |
| `/frontend/src/main.js`          | JS Application Entry Point                 |
| `/frontend/public/index.html`    | Html Application Entry Point (/)           |
| `/frontend/src/assets`           | Static Assets                              |
| `/backend/dist/`                 |                                            |
