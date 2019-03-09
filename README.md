# Epic-Mail
 [![Build Status](https://travis-ci.org/Gfreedoms/Epic-Mail.svg?branch=feature)](https://travis-ci.org/Gfreedoms/Epic-Mail)
[![Coverage Status](https://coveralls.io/repos/github/Gfreedoms/Epic-Mail/badge.svg?branch=api)](https://coveralls.io/github/Gfreedoms/Epic-Mail?branch=api)
[![Maintainability](https://api.codeclimate.com/v1/badges/96209b61c549051ff8c8/maintainability)](https://codeclimate.com/github/Gfreedoms/Epic-Mail/maintainability)


- ## API
This App exposes endpoints that allows ```Internet users``` to seemlessly share messages 

- ## Heroku URL
[Epic-Mail hosted on  heroku ](https://epic-mailv1-epic.herokuapp.com/api/v1/messages)

## Functionality

 -Create a user account. 
 - Sign in a user. 
 - Get all received emails for a user. 
 - Get all unread emails for a user.  
 - Get all emails sent by a user​.
 - Get a specific user’s email. 
 - Send email to individuals​. -
 - Delete an email in a user’s inbox. 

- #### Available Resource Endpoints

|Method | Endpoint | Usage |
| ---- | ---- | --------------- |
|POST| `/api/v1/messages` | Send message|
|GET| `/api/v1/messages` |View Message List|
|GET| `/api/v1/messages/1` | Retrieve message with with id that equals 1.|
|GET| `/api/v1/messages/unread` |Retrieve unread messages |
|GET| `/api/v1/messages/sent` | Retrieve sent messages.|
|DELETE| `/api/v1/messages/messages/1` |Delete a specific message.|
|POST|`/api/v1/auth/login`| Login User.|
|POST|`/api/v1/auth/signup`|Sign Up user.|


## Getting Started 🕵
- To run on local machine git clone this project :
```
 $ git clone https://github.com/Gfreedoms/Epic-Mail.git
 ```

 Copy and paste the above command in your terminal, the project will be downloaded to your local machine.

- To consume API in client of choice navigate to:
 ```
 http://localhost:3000/
 ```

### Prerequisites
The application is built using Node js And Express: Flask framework.
>[Node Js](https://nodejs.org/en/) Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.


To download and install node js checkout:
```
https://nodejs.org/en
```


### Installing
For this section I will assume you have Node js installed and it's configured on your machine. </br>
Navigate to the folder you cloned and run: </br>

- add node modules
```
$ cd src
$ npm install
```


- Run API 🏃
```
$ cd src
$ npm start
```
The API should be accessible via : http://127.0.0.1:3000/


## Running the tests

```
$ cd the directory where you have cloned the project
$ npm test
```

- Coding style tests

[Airbnb](https://github.com/airbnb/javascript/) (Airbnb) standards are followed in project. </br>



## Set Up Notifications Package
 - [Check this out to set up the Notifications Package](src/api/utils/notifications/README_notifications.md)

## Deployment 🚀

- [Check this out to deploy to heroku](https://devcenter.heroku.com/articles/getting-started-with-python#introduction)

## Built With  🏗 🔨⚒

* [node/Express][Node Js](https://nodejs.org/en/) Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine used
* [Express](https://expressjs.com/) - Web framework for supporting REST APIs.

## Contributing 👍

- Please Fork me! :-)

## Versioning ⚙

`This is the version one`

## Authors 📚

* **FREEDOM GEMMAR**


## License 🤝

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments 🙏
* Fellow "Developers without borders"
* [Motivation](https://www.youtube.com/watch?v=dQw4w9WgXcQ) - BEST RESOURCE EVER!!! 🤓🤓

