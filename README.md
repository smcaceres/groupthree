# Critic's Corner
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Description

Critic's Corner is a web application that allows users to:
* search for movies
* create discussion posts about a particular movie
* rate liked and disliked movies alike

![Critics Corner Screenshot](./assets/images/critics-corner-sc.PNG)

## Table of Contents

* [Link](#link)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributions](#contributions)

* [Technology](#technology)

* [Questions](#questions)

## Link
[Click here](https://critics-corner-forum.herokuapp.com/) to go to the deployed application.

## Installation
To install the app on your machine for development and/or testing:

1. Install [Node.js](https://nodejs.org/en/) and [MySQL](https://dev.mysql.com/downloads/mysql) if you haven't already.
    - You can follow this [installation guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) to help you install MySQL.
2. Clone this repository onto your computer.
3. Navigate to the root of this repository on the command line.
4. Run `npm install` on the command line to install the necessary packages.
5. Run `mysql -u root -p` on the command line and enter your MySQL password to open the MySQL interface.
6. In MySQL, run `SOURCE ./db/schema.sql` to set up the `tech_blog_db` database.
7. In the root directory of the repository, run `touch .env` on the command line to create an environment variable file.
8. In the `.env` file, type the following:
```
DB_NAME='tech_blog_db'
DB_USER= [YOUR MYSQL USERNAME HERE]
DB_PW= [YOUR MYSQL PASSWORD HERE]
```
9. In `server.js`, set `sequelize.sync({ force: true })` as shown below to sync the database:
```javascript
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
```
10. Remember to set it back to `{ force: false }` once you have set up the database.

## Usage
1. Go to the deployed app at [https://critics-corner-forum.herokuapp.com/](https://critics-corner-forum.herokuapp.com/).
2. Click on a post's comment count to view comments or add a comment.
3. Click on "login" to login or signup.
4. Click on "dashboard" to view your post dashboard.
5. From your dashboard, click "Edit post" to edit or delete one of your previous posts.
6. From your dashboard, type in a movie title, your rating, and a reason for your rating in the "Rate a Movie" section to make a post.
7. Click on "logout" to logout.

## License
![MIT License](https://img.shields.io/badge/license-MIT-blue)

This project has an MIT License

[MIT License](https://choosealicense.com/licenses/mit/)

## Contributions
* Kyrsten Urnayan
* Nic Wille
* Simon Wilder
* John Stapleton

## Technology
* Javascript
* CSS
* Node.js
* Express.js
* MySQL
* Sequelize
* Heroku

NPM Packages:
* express-handlebars
* dotenv
* bcrypt
* express-session
* connect-session-sequelize

## Questions
If you have additional questions about this project, you can reach us at:

GitHub:
* [kg-phantom](https://github.com/kg-phantom)
* [missroseblue](https://github.com/missroseblue)
* [NicWille](https://github.com/NicWille)
* [simonwilder](https://github.com/simonwilder)

Email:
* [ksurbayan@gmail.com](mailto:ksurbayan@gmail.com)
* [missroseblue@gmail.com](mailto:missroseblue@gmail.com)
* [nic.wille1020@yahoo.com](mailto:nic.wille1020@yahoo.com)
* [simonwolfewilder@gmail.com](mailto:simonwolfewilder@gmail.com)