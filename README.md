# 13-burger
Unit 13 Node Express HandleBars - Burger Logger with MySQL, Node, Express, Handlebars and ORM

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Eat-da-Burger
This Burger Logger for Burger Delicious is a MVC (Model-View-Controller) application that allows users to create burgers, view burgers, devour burgers and throw away burgers. 

## Table of Contents
* [Link to the App](#Link-to-the-App)
* [About this project](#About-this-project)
* [Installation](#Installation)
* [Files](#Files)
* [Screenshots](#Screenshots)
* [License](#License)
* [Acknowledgements](#Acknowledgements)
* [Contributing](#Contributing)
* [Issues](#Issues)
* [Authors](#Authors)

## Link to the App
Please visit my <a href="https://github.com/sareronald/13-burger.git">GitHub repository</a> for a copy of the code for this application.<br>
Please visit the <a href="https://tranquil-woodland-78404.herokuapp.com/">Burger Logger </a>application, hosted on Heroku.

## About this project
### **How the app works**
This project uses front end and back end design to create a burger logger. When you add a burger to the form field and click on the button, the name is entered into the list of burgers found on the left. Each burger has a Devour Me button and when this is clicked, the burger name moves to the list on the right - to the list of burgers that have been devoured (devoured = true). Once there, each burger has a Throw Away button that allows you to remove the burger - deleting the burger from the user interface and the MySQL database. 

### **How the app was built** 
This app uses MySQL, Node, Express, Handlebars, ORM (Object Relational Mapper) to add (POST), view (GET), devour (PUT) and discard (DELETE) burgers. IT usesa MVC design pattern where Node and MySQL are used to query and route data in the app. Handlebars is used to generate the HTML using Bootstrap, Shutterstock, Google Fonts and Font Awesome to create the aesthetics.

### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/)
* **Backend Technology:**
  * [MySQL](https://www.npmjs.com/package/mysql)
  * [Express](https://www.npmjs.com/package/express)
  * [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [Nodemon](https://www.npmjs.com/package/nodemon)
* **Frontend Technology:**
  * HTML
  * CSS
  * [Bootstrap](https://getbootstrap.com/)
  * Javascript
  * [jQuery](https://jquery.com/)
  * [Handlebars](https://www.npmjs.com/package/express-handlebars)
<br>

### **MVC design Pattern**
This project follows MVC (Model-View-Controller) design pattern, which is a form of  OOP (Object Orientated Programming). The MVC design pattern assigns objects in the application one of three roles (model, view or controller) and defined the way that each part of the application communicated with another.
* model - contains the core functionality and data
* view - displays the information to the user (more than one view may be defined)
* controller - handles the input from the user
<img width="819" alt="Screen Shot 2020-11-16 at 9 59 03 am" src="https://user-images.githubusercontent.com/67722377/99199328-7301d180-27f2-11eb-9335-7f0887ba5598.png">
<br>

## Installation
Follow these instructions if you would like to set this application up on your local computer. Alternatively, you can also access the deployed application by going to https://tranquil-woodland-78404.herokuapp.com/

1. **Clone this GitHub repository**

```
git clone https://github.com/sareronald/13-node-express-handlebar.git
```
2. **Install Node.js.** You can install the latest version here: https://nodejs.org/en/
3. **Install all dependent npm packages.** After you have cloned the repository, run  the following command to install the required packages.
```
npm install
```
* [MySQL](https://www.npmjs.com/package/mysql) - used to create a connection to the MySQL database and command line.
* [Express](https://www.npmjs.com/package/express) - a Node.js web application framework.
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - allows you to use Handlebars to create templates to build the HTML. 
* [dotenv](https://www.npmjs.com/package/dotenv) - used to retreive the MySQL password from a .env file
4. **Install MySQL Workbench**. If you do not already have MySQL on your computer, you can access the latest version using the link above. 
5.**Set up a database. 
* Use your Terminal to navigate to the correct folder (📂 13-burgers) and then run the code below ▶️ Enter your MySQL password when prompted.
```
mysql -u root -p
```
* Then set up the `burgers_db` database by running the following two commands to create and then seed the table with data:
```
source schema.sql
```
```
source seeds.sql
```
* Close out of the MySQL command line tool:
```
exit
```

* To start the application type the following into your terminal:
```
npm start
``` 
* In the Integrated Terminal, you will be notified when the Server is listening and working: `Server listening on: http://localhost:8080`. All that is left to do is open your browser and search for the relevant connection at `localhost/8080` in your browser.
<br>

## Files
This MVC application consists of the following files:
| File                | Relative Path          |
| ------------------- | ---------------------- |
|server.js | server.js |
| schema.sql | db/schema.sql |
| seeds.sql | db/seed.sql |
| connection.js | config/connection.js |
| orm.js | config/orm.js |
| burgers_controller.js | controllers/burgers_controller.js |
| burger.js | models/burger.js |
| burger_style.css | public/assets/css/burger_style.css |
| burgers.js | public/assets/js/burgers.js |
| main.handlebars | views/layouts/main.handelbars |
| index.handlebars | views/main.handelbars |
| package.json | package.json |
| package-lock.json | package-lock.json |
<br>

## Screenshots

#### **Screenshot of application**

<br>

## Licence
- [Apache License 2.0](http://www.apache.org/licenses/)
<br>

## Acknowledgements
* Images have been sourced from [Shutterstock](https://www.shutterstock.com/home).
* [Font Awesome](https://fontawesome.com/) for the Throw Away trash can icon.
<br>

## Contributing
Any contributions are appreciated. Be sure to review the contributing guidelines and code of conduct. By participating, you are expected to uphold this code. Use your best judgement and feel free to propose changes to this document in a pull request. Should you have any questions, feel free to contact me directly using the email below.
<br>

## Issues
If you find an issue while using the app or have a request, [log the issue](https://github.com/sareronald/13-burger/issues) or request here. These will be addressed in a future code update.
<br>
<hr>

## Authors
- **SARAH RONALD** <br>
  Contact information:
  sareronald@hotmail.com <br>
  GitHub link:
  [sareronald](https://github.com/sareronald)
