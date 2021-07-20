# Thoughts

Created by [Scott Ryan](https://github.com/scott-a-code) & [Daniel Cooper](https://github.com/danjcooper)
Inspired by [telegra.ph](https://telegra.ph/)

- [Thoughts](#thoughts)
  - [Installation & Usage](#installation--usage)
  - [Technologies used.](#technologies-used)
    - [Front End](#front-end)
    - [Backend](#backend)
    - [Development](#development)
  - [Data Storage](#data-storage)
  - [Routes](#routes)

## Installation & Usage

- Clone / download this repo.
- In your terminal navigate to `cd thoughts`
- To start enter `` into your terminal.
- Open the client `./client/index.html`
- The api will now be serving at `https://localhost:3000`
- To close enter `` into your terminal.

## Technologies used.

### Front End

- HTML/CSS
- JavaScript

### Backend

- Express
- Cors

### Development

- Docker
- Postgres

## Data Storage

Our data is stored in in a relational database with the below schema.

| Name      | Type    | notes              |
| --------- | ------- | ------------------ |
| ID        | Serial  | Primary Key        |
| Title     | Varchar | Max 100 characters |
| Pseudonym | Varchar | Max 100 characters |
| body      | Varchar | Max 500 characters |

## Routes

Our app uses the below restful routes

| Method | Endpoint   | Info                             |
| ------ | ---------- | -------------------------------- |
| POST   | /posts/new | Adds a new entry to the database |
| GET    | /posts/:id | gets a post by id                |
