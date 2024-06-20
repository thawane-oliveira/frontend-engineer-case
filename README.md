# Star Wars Planets Search

The application was built using ReactJS, Context API for state management, and CSS for styling.

## Features

- Displays a list of Star Wars characters from the swapi.dev API. While the request is being made, a loading notice is displayed.
- Allows filtering characters by planets/homeworld, and the applied filter can be cleared.
- Enables loading more characters by clicking the "Load More" button.
- Responsive CSS, functional on both desktop and mobile.

## How to Run the Project

Follow the instructions below to run the project in your local environment:

1. Clone this repository.
2. Open the terminal and navigate to the `frontend-engineer-case` folder.
3. Run the command `npm install` or `npm i` to install the dependencies.
4. After installation, type `npm start` to start the application.
5. Access the application in your browser at `http://localhost:3000`.

## Decisions and Tradeoffs

- The mission here was to apply pure CSS that could get as close as possible to the proposed Figma design.
- It was decided to keep 4 photos per line, even though the people result returns 10 items, as clicking load more will complete the space.
- Why React and not Next? The intention was to reinforce what has already been learned.
- The loading was a tradeoff to avoid displaying a blank screen while the request is being made.

## Improvement Opportunities

- Perform coverage testing for individual components and end-to-end testing.
- Add an error notice in case the request fails, prompting the user to reload the page.
- Allow combining filters from multiple planets.
