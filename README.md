<h2  align="center">Netheos FAQ Page (Node.js React.js)</h2>

### Exigences
- Node.js & 
- MySQL
## Installation Backend - Node.js
### 1. Fichier .env
> Créer un < .env > fichier ./backend/.env       
        
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_DATABASE=netheos_challenge_ugur
    PORT=8000
### 2. Importer le fichier  .sql 
- Vous pouvez le trouver dans le chemin du ./backend/src/model
- MySQL command line
- mysql> source netheos.sql; 
### 3. Télécharger des packages  (  ./backend  )
>npm install   
### 4. Lancer le backend  (  ./backend  )
>node app.js   ||  npm start 

## Installation Frontend - React.js
### 1. Télécharger des packages  (  ./frontend  )
> npm install   

### 2. Lancer le frontend  (  ./frontend  )
> npm start 


## Url
- Faq Page            http://localhost:3000/ || http://localhost:3000/faq
### Admin
- Admin Connexion Page    http://localhost:3000/admin
- username: admin 
- password: admin

## Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8826791d630804c7448a)
