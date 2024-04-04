## Restaurants-App

Restaurants App created in React/TS using context.

On the Home route there are 4 sections: First section is section that gives random Restaurant when the button Surprise me is clicked, second section is section for the most popular restaurants, third section is section with cuisines, when clicked gives only the restaurants from the corresponding cuisine and the last forth section is section where all of the restaurants are listed

When a restaurant card is clicked it redirects to a restauran details page where the details for the restaurant are listed, if there are reviews they are also listed and on the bottom of the page there is review form which can be filled and give a review for the restaurant.

There is also heart icon on the restaurant card which can be clicked and mark it as favorite restaurant and it will be stored in the favorites page which can be accessed by clicking the heart icon in the navbar at top right. They are listed there and if you want to remove it from there you can just click the heart icon and the item will be removed from favorites.

## Installation

Clone the repository:

```
git clone
```

Install the dependencies after entering the starter file with `cd starter` in the terminal:

`npm i`

`npm i bootstrap`

`npm i react-router-dom`

`npm i react-router`

`npm i axios`

## Usage

Start the application in the starter folder:

`cd starter`

`npm start`

Browse your application on:

`http://localhost:3006/`

Start the API in the starter folder:

`cd starter`

`npm run server`

API:

`http://localhost:5001/restaurants`
