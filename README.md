# how to use this template ? 

Clone this project:

    git clone https://github.com/DurandSacha/Flask-VueJS-Docker-Demo

Run a npm server for vue

    npm run serve

go python api

    cd api

run flask api server

    flask run


flask is used for API branching, while vue.js is useful for separate front-end.

# How to use postgres SQL database ?

initialize database :

    python api/manage.py db init
    
make migration :

    python api/manage.py db migrate
    
update modifications:

    python api/manage.py db upgrade



