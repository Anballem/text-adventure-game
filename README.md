The Lost Temple – Text Adventure Game

A browser-based text adventure game built using Object-Oriented Programming in JavaScript.
The player explores rooms, collects items, interacts with characters, and must defeat a final boss to win.


Project Brief

This project was created as part of an Object-Oriented Programming JavaScript assignment.
The goal was to design a single-page text adventure game using HTML, Tailwind CSS, and JavaScript.


How to Play

- Use the direction buttons to move between rooms
- Click Interact to:
  - Pick up items
  - Fight enemies
- Collect the Golden Key
- Defeat the Temple Guardian
- Escape the temple to win the game

Entering the final room without the key results in Game Over.


Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (ES6)
- Object-Oriented Programming (Classes)


OOP Design

Classes Used:

Room  
Stores room data, exits, items, and characters

Character  
Represents friendly or hostile NPCs

Player  
Tracks the player’s current room and inventory

The game logic reuses these classes to allow easy extension or creation of new games.


Win and Lose Conditions

Win Condition:
- Collect the Golden Key
- Defeat the Temple Guardian

Lose Condition:
- Interact with the Guardian without the key


**Live Game:**  
`https://Anballem.github.io/text-adventure/`



