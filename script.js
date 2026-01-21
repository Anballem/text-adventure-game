class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
    this.character = null;
  }

  connect(direction, room) {
    this.exits[direction] = room;
  }
}

class Character {
  constructor(name, hostile = false) {
    this.name = name;
    this.hostile = hostile;
  }
}

class Player {
  constructor(startRoom) {
    this.currentRoom = startRoom;
    this.inventory = [];
  }
}

/* Rooms */
const entrance = new Room("Entrance", "You stand at the entrance of an ancient temple.");
const hall = new Room("Hall", "A long hallway with faded carvings.");
const armory = new Room("Armory", "An old armory filled with rusted weapons.");
const bossRoom = new Room("Sanctum", "The final chamber. A guardian awaits.");

/* Connections */
entrance.connect("north", hall);
hall.connect("south", entrance);
hall.connect("east", armory);
hall.connect("north", bossRoom);
armory.connect("west", hall);

/* Items & Characters */
armory.items.push("Golden Key");
bossRoom.character = new Character("Temple Guardian", true);

/* Player */
const player = new Player(entrance);

/* UI Update */
function updateUI() {
  document.getElementById("description").textContent =
    `${player.currentRoom.name}: ${player.currentRoom.description}`;

  document.getElementById("objects").textContent =
    player.currentRoom.items.length
      ? `Items here: ${player.currentRoom.items.join(", ")}`
      : "No items here.";

  document.getElementById("characters").textContent =
    player.currentRoom.character
      ? `You see ${player.currentRoom.character.name}`
      : "No one else is here.";
}

/* Movement */
function move(direction) {
  const nextRoom = player.currentRoom.exits[direction];
  if (nextRoom) {
    player.currentRoom = nextRoom;
    updateUI();
  } else {
    alert("You can't go that way.");
  }
}

/* Interaction */
function interact() {
  const room = player.currentRoom;

  if (room.items.length) {
    const item = room.items.pop();
    player.inventory.push(item);
    alert(`You picked up: ${item}`);
  } else if (room.character) {
    if (room.character.hostile) {
      if (player.inventory.includes("Golden Key")) {
        alert("You defeat the Guardian and escape the temple. YOU WIN!");
        document.body.innerHTML = "<h1>You Win!</h1>";
      } else {
        alert("The Guardian destroys you. GAME OVER.");
        document.body.innerHTML = "<h1>Game Over</h1>";
      }
    }
  } else {
    alert("Nothing to interact with.");
  }

  updateUI();
}

/* Start Game */
updateUI();

