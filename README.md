# Level calculator

## Introduction

### Overview
Created as a replacement for an excel spreadsheet my partner uses to calculate the 'level' of meals on her diet.

Essentially, the programme is a low-carb diet where the participant can eat a number of 'levels' worth of food each day. The current spreadsheet assesses the nutritional info of a user's recipe and gives it a 'level' based on the composition of fat, carbohydrates, and sugars. There are also max and minimum limits on the amount of each component per 100g.

The aim is to create something that is easier to access, and can be used by her friends and family who are also on the same programme.

### Setup

After cloning down the repo be sure to install npm dependencies, run the database seeds, and start the dev server using the code below.

```
npm install # to install dependencies
npm run knex migrate:latest # to make sure the db uses the latest tables
npm run knex seed:run # to populate the database with seed data
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## User stories

### MVP

I want to be able to save, and access all of the ingredients I use so their nutritional info is always available.

I want to be able to add new ingredients, delete unused ingredients, and update old ingredients.

I want to be able to select ingredients for my recipes, input their weight, and have the app calculate the 'level' of my meal.

### Stretch

I want Giulia (my partner's sister, who lives in Germany and only speaks German) to be able to use the app with me.

I want to be able to have a seperate account from Giulia so we don't have to share ingredients.

I want to be able to see what Giulia has saved on her list.

I want to be able to save recipes that I make all the time so I can access them quickly.

I want the app to be able to work offline, for when I am stuck in the supermarket without reception.
