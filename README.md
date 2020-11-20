<p align="center">
 <a href="https://github.com/DurandSacha/Flask-VueJS-Docker-Demo" alt="Contributors">
    <img src="https://img.shields.io/github/contributors/badges/shields" /></a>
    
 <a href="https://github.com/DurandSacha/Flask-VueJS-Docker-Demo">
    <img src="https://img.shields.io/github/commits-since/badges/shields/gh-pages?label=commits%20to%20be%20deployed"
        alt="commits to be deployed"></a>

 <a href="https://github.com/badges/shields/pulse" alt="Activity">
    <img src="https://img.shields.io/github/commit-activity/m/badges/shields" /></a>
</p>

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

Change database variable in config.py ( SQLALCHEMY_DATABASE_URI )

initialize database :

    python api/manage.py db init
    
make migration :

    python api/manage.py db migrate
    
update modifications:

    python api/manage.py db upgrade



