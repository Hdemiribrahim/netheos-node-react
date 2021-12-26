# netheos-node-react

### Exigences
 > Node.js & 
 > MySQL
# Installation Backend - Node.js
### 1. Fichier .env
> Créer un < .env > fichier ./backend/.env       
        
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_DATABASE=netheos
    PORT=8000
### 2. Importer le fichier  .sql 
>Vous pouvez le trouver dans le chemin du ./backend/src/model
    MySQL command line
    mysql> source netheos.sql; 
### 3. Télécharger des packages  (  ./backend  )
>npm install   
### 4. Lancer le backend  (  ./backend  )
  node app.js   ||  npm start 

# Installation Frontend - React.js
### 1. Télécharger des packages  (  ./frontend  )
>npm install   

### 2. Lancer le frontend  (  ./frontend  )
  npm start 


## Url
Faq Page            http://localhost:3000/ || http://localhost:3000/faq
Admin Login Page    http://localhost:3000/admin
