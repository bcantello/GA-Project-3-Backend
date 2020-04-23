# Project Overview

## Project Links

- [Backend github repo link](https://github.com/bcantello/GA-Project-3-Backend.git)
- [Frontend github repo link](https://github.com/bcantello/GA-Project-3-Frontend.git)
- [add your deployment link]()

## Project Description

An app for connecting pet owners with pet service providers in their local ara. Pet owners will be able to choose from different services to schedule. The service providers will be set up in a "gig economy" fashion with service providers able to approve or decline service requests in their local metro.

## API

Most of out data will be stored and accessed from a rest api that we will build. There is the possibility that we may add additional API's for mapping, weather, or other relevant services as time permits.


## Wireframes


- [Wireframes](https://res.cloudinary.com/df6sigxz7/image/upload/v1587143239/pet%20service%20app/pet_owner_mvp.png)
- [React architecture](https://docs.google.com/drawings/d/18Hq_A72VDjx0QRy-cDF9zlw0pyXYMBRaETnuvfN9eiU/edit)


### MVP/PostMVP



#### MVP - Front end
- User login in form connected to mondoDB data
- Form to create an account as a pet owner
- Calendar to schedule pet services
- Appointment management (update or delete scheduled appointments)
- Responsive design built mobile first

#### MVP - Back end
- Consumer Model: Ability to add pet owner profiles
- Provider Model: Searchable provider profiles
- Appointment Model: Create, update, and delete scheduled appointments
- Heroku Deployment using Node, Express, Mongodb

#### PostMVP - Front and Back end

- Ability to add a service provider as a favorite
- Automated notifications (SMS?)
- Ability to sign up as a service provider

## Components

### Front end

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Main | Hold routes |
| Home/Login | Includes forms for new and existing user login |
| Dashboard | Includes currently scheduled appointments and button linking to new appointment scheduler |
| Appointment Scheduling | Calendar (bootstrap?) for appointment scheduling. Creates appointment entry in DB |
| Confirmation | Displays confirmation details for scheduled appointment |
| Header | This will render the header include the nav | 
| Footer | copyright and home nav |

### Back end

| Component | Description | 
| --- | :---: |  
| Appointments Model | schema and connections model to provide appointment information. | 
| service provider model | schema and connections model to provide service provider information | 
| user model | schema and connections model to provide information of the user to the database | 
| appointments Controller | CRUD page to manipulate data in forms on frontend. |
| Service Provider controller | CRUD for service providers |
| User Controller | CRUD for users |
| DB Seed data | Seed data for demo user and providers |
| Connection | Handles api connection |
| Index.js | Handles db routing and implements library dependencies |
| Routing for all models | 3 components which creating routing between models |


### Front end

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 8hrs |  |  |
| Main | H | 2hrs | 10min |  |
| Home/Login | H | 5hrs |  |  |
| Dashboard | H | 5hrs |  |  |
| Appointment Scheduling | H | 8hrs |  |  |
| Confirmation | H | 2hrs |  |  |
| Header | M | 2hrs |  |  | 
| Footer | L | 1hr |  |  |
| CSS | H | 16hrs |  |  |
| Testing | H | 8hrs |  |  |
| Deployment | H | 5hrs |  |  |
| Total | - | 62hrs |  |  |

### Back end

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create DB Seed Data | H | 1hr | 5hrs |  |
| Appointments Model | H | 1hr | 10min |  |
| Pets Model | H | 1hr | 10min |  |
| Service Provider Model | H | 1hr |  |  |
| User Model | H | 1hr |  |  |
| Appointments controller | H | 2hrs | 10min |  |
| Pets controller | H | 2hrs | 10min |  |
| Service Provider controller | H | 2hrs |  |  |
| User Controller | H | 2hrs |  |  |
| Connection | H | 1hr |  |  |
| Index.js | H | 2hrs |  |  |
| Appointments Routes | H | 2hrs | 10min |  |
| Pets Routes | H | 2hrs | 10min |  |
| Service Provider Routes | H | 2hrs |  |  |
| User Routes | H | 2hrs |  |  |
| Testing | H | 4hrs |  |  |
| Deployment | H | 4hrs | 1hr |  |
| Total | H | 32hrs | 7hr |  |

## Additional Libraries
 Axios, Google Fonts, react-calendar, react-time-picker

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
