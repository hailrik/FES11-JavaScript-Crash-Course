//Practicing objects 

let users = [
  {
    username: "Rahik",
    email: "rahikomi12@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "programmer#0984",
    lessonsComplete: [0, 1],
  },
  {
    username: "Mitri",
    email: "Mitri@gmail.com",
    password: "Mitri123",
    subscriptionStatus: "VIP+",
    discordId: "Hornelf#0602",
    lessonsComplete: [0, 1, 2, 3],
  },
];

function register(
  username,
  email,
  password,
  subscriptionStatus,
  discordId,
  lessonsCompleted
) {
  let user = {
    username: username,
    email: email,
    password: password,
    subscriptionStatus: subscriptionStatus,
    discordId: discordId,
    lessonsCompleted: lessonsCompleted,
  };
  users.push(user);
}

console.log(users);

register(
  "Demitri",
  "Demitri@gmail.com",
  "Demitiri123",
  "VIP",
  "Demitri#1234",
  [1, 2, 3, 4]
);

// All of that can be written like this

let newUsers = [
  {
    username: "Rahik",
    email: "rahikomi12@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "programmer#0984",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "Mitri@gmail.com",
    password: "Mitri123",
    subscriptionStatus: "VIP+",
    discordId: "Hornelf#0602",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function registeration(user) {
  newUsers.push(user);
}

console.log(newUsers);

registeration({
  username: "Demitri",
  email: "Demitri@gmail.com",
  password: "Demitiri123",
  subscriptionStatus: "VIP",
  discordId: "Demitri#1234",
  lessonsCompleted: [1, 2, 3, 4],
});

//DOM - The Document Object Model
// Allows us to change the styling of elements of our website


//First way fo accessing the element
console.log(document.querySelector('#title'));

//Second way fo accessing the element -- best practise 
console.log(document.getElementById('title'));

//Changing HTML
document.querySelector('#title').innerHTML = "Front End Simplified"
document.querySelector('#title').innerHTML += " - It's Great"

//Changing CSS
document.querySelector(".title").style.fontSize = '38px'

// on click linking
function changeTitleToRed() {
    document.querySelector(".title").style.color = 'red'
}

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
} 