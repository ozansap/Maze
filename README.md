# Maze

This is a demonstration of maze generation and solution using randomized depth first search. This webapp is made using [React](https://reactjs.org/).

The web app is hosted at [maze.ozansap.com](https://maze.ozansap.com).

## Features
- [x] - Variable width and height of the maze
- [x] - Complete the algorithm instantly 
- [x] - Progress the algorithm one step at a time
- [x] - Play/pause the algorithm as an animation
- [x] - Variable animation speed
- [x] - Works on mobile

## How does it work
### Generation
1. A grid is created with each cell having 4 walls around it
2. Randomized depth first search starts from top left cell
3. Visited cells are connected and added to a stack
4. When the head has nowhere it can move to, it backtracks by popping the stack until a legal move is found
5. Steps 3 and 4 repeat until the visited cell count reaches total cell count

### Solution
1. Randomized depth first search starts from the first selected cell. The head can only move to connected cells
2. Visited cells are added to a stack
3. When the head has nowhere it can move to, it backtracks by popping the stack until a legal move is found
4. Steps 3 and 4 repeat until the head reaches second selected cell

## Planned Features
- [ ] - Adding more algorithms and comparing them
- [ ] - Allowing the user to solve the maze on their own

## Significance
This is my second webapp. I used this project to learn React and get into component based web development. React development process is a lot user friendlier and intuitive compared to vanilla web development. Components and Props are similar to classes and Object Oriented Programming and thus more coherent.

I also wanted this website to properly work on mobile. I had to learn responsive design techniques and how to properly make use of CSS. However, it was harder than I expected to convert my existing design to work responsively. I had to redesign the website a second time after learning responsive design techniques. I plan on making my next projects mobile first. Mobile first development will make it easier to create dynamic webpages.

## Technologies Used
* [React](https://www.npmjs.com/package/react) to have a more streamlined development experience
* [create-react-app](https://www.npmjs.com/package/create-react-app) to generate and build the webpage 
* [sass](https://www.npmjs.com/package/sass) to have cleaner CSS files
