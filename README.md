# Nickel App

## Overview

Web application for literary works discussions. Developed in collaboration with @OpKSpatY as a conclusion project for the Internet Systems Technology course at the Federal Institute of Brasília.

## How to set up

```bash
# Clone this repository
$ git clone git@github.com:meritabrilhante/nickel-app.git

```

## Set Environment:

If you alredy have this tools, skip this part.

1. Install Blitz JS, see the docs here: https://blitzjs.com/docs/tutorial#database-setup
2. Install PostgreSQL, see the docs here: https://www.postgresql.org/download/
3. Install Docker, see the docs here: https://docs.docker.com/engine/install/
4. Install NodeJS, see the docs here: https://nodejs.org/en/download

## Setup Project

Assuming that everything has been successfully installed, including the dependencies:

1. In the project directory:

```bash
yarn install

```

2. Create a .env.local file, and set the environments variavles:

```bash
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=database_name
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/database_name

```

3. Run `docker compose up -d` to start databasse container;
4. Run `blitz prisma migrate dev`;


## How to Prisma Studio

1. To access Prisma Studio, with the project running, run in terminal:

`blitz prisma studio`
