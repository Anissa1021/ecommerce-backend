# (ORM):Ecommerce Back End

## Description
This application was to practice my skills with back end by building this Ecommerce app. The User will be allowed to delete, create, and update from their database.
## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Video Example](#video-example)
* [Usage](#usage)
* [Tech](#tech)
* [Notes](#notes)
* [Questions](#questions)
  
## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Video Example
[Video Walkthrough](https://drive.google.com/file/d/1ECYMP6OHbhzXXzFKSpUeAdPs79J86Z-D/view)
## Usage
- `npm i` to install dependencies
- log in to mysql and run `source db/schema.sql`
- run `use ecommerce_db`
- `node server.js`
## Tech
- SQL2
- Express
- Node
- Dotenv
- JS
## Notes
I have trouble with my products not showing up, I believe it could be something as small as a typo. However everthing else works smoothly and im glad with the outcome.
## Questions
[Anissa1021](https://github.come/Anissa1021)
