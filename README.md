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

#### Prettier
Make sure your VS Code is configured to format on save. This will ensure that your code is formatted correctly before committing.

#### Build

### Deploy

### Template Structure

| Location                                   |  Content                                   |
|--------------------------------------------|--------------------------------------------|
| `/backend`                                 | Django Project & Backend Config            |
| `/frontend/client-app`                     | Vue App .                                  |
| `/frontend/client-app/src/main.js`         | JS Application Entry Point                 |
| `/frontend/client-app/public/index.html`   | Html Application Entry Point (/)           |
| `/frontend/client-app/src/assets`          | Static Assets                              |

### API Urls
1. Tasks: http://localhost:8000/tasks/api/v1/
2. Tasks API Documentation: http://127.0.0.1:8000/tasks/docs/
