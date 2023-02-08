# test-technique-nodejs

## Project Description ##

The goal of this project is to create a crud application with a REST API. The application will be used to manage a list of books.

The features are :

- Signin
- Signup
- List books
- Add a book
- Edit a book
- Delete a book

The required stack was : NodeJS, Express, MongoDB, Mongoose, Git, NuxtJs

## How to install and Run the project ##

#### What you will need to run the project : ####

- Docker
- docker-compose

This project is using docker and docker-compose to run the application. You will need to install docker and docker-compose on your machine.

#### Install and Run the project ####

First, clone the repository running this command :

```bash
git clone https://github.com/aleloup-ops/test-technique-nodejs.git
```
Now access the repository root :

```bash
cd test-technique-nodejs/
```

Now you can build the containers using docker-compose :

```bash
docker-compose build
```

Now you can run the containers using docker-compose :

```bash
docker-compose up
```

The API is running on http://localhost:8080
The Database is running on http://localhost:27017
The Front is running on http://localhost:3000

## Packages ##

FrontEnd :
```
    "@nuxtjs/axios": "^5.13.6",
    "cookie-universal-nuxt": "^2.2.2",
    "dotenv": "^16.0.3",
    "nuxt": "^2.15.8",
    "postcss": "^8.4.21",
    "prettier": "^2.7.1",
    "tailwindcss": "^3.2.4",
    "vue-server-renderer": "^2.7.10",
```

BackEnd :
```
    "bcryptjs": "^2.4.3",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.9.0",
    "nodemon": "^2.0.20"
```

## How to use the project ##

When accessing the front, you will be redirected to the login page. You can create an account by clicking on the "Sign up" button. Once your account is created, you can access the homepage. You will then be displayed the list of your books.

You can add a book by clicking on the "Add a book" button.
A modal will open and you will be able to add a book with a title, description, author, and disponibility.

You can edit a book by clicking on the "Edit" button.

You can delete a book by clicking on the "Delete" button.

Finally, you can logout by clicking on the "Logout" button.