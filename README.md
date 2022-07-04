# (LITE - Typescript) Express and Knex Starter

Here is a LITE (minimalistic) starter project so you can get a sense of Knex integration with Typescript and Express. This is not something that should be taken into production but something to serve as a starter so you can add in your own coding flair. We've seen many starters before but found that they were too bloated and too hard to work from. As an alternative we offer our LITE starter repos that have the bare minimum for you to work with or just get a sense of how certain technologies work together.

## Set up

Before starting make sure [docker](https://www.docker.com/) is installed along with node v16+.

### Installation

To begin from the root directory install the depenendencies with:

```bash
npm install
```

Once installed you can create a `.env` file in the root directory with the following configuration:

```bash
PORT=4000
DB_USER=root
DB_PASSWORD=password
DB_PORT=3306
DB_DATABASE=knex
```

Next either ensure you have a mysql database running on the same port as DB_PORT and with a database named DB_DATABASE or take advantage of the `docker-compose.yml` file and run the command:

```bash
 docker-compose up
```

From there you can run the project with the command:

```bash
npm run dev
```

There is a prestart script that will automatically run the migrations for the database. The seeds are not automatically run and will have to be done manually. This can be achieved by running the command `npx knex seed:run`

## Adding Migrations and Seeds

A gist by NigleEarle does a wonderful job at explaining how to use create migrations and seeds for knex. To learn more about migrations and seeds check out this wonderful [gist](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261).

## Adding Types for Tables

Inside the knex folder there is a types folder which contains `models.ts` (where the interfaces are stored for each table) and `types.ts` (how knex knows what the types are for each table). Once you have created a new table in the migrations folder you can go into the `models.ts` file and export a new interface matching that table's schema. With this created you can then open `types.ts` and copy the work done for `posts` but replace it with your newly created table.

To learn more about typing and knex go to the offical knex docs [here](http://knexjs.org/guide/#typescript).
