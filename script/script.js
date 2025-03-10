const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// form
const formElement = document.getElementById('formAddMember');
//input form
const nameElement = document.getElementById('input-name');
const roleElement = document.getElementById('input-role');
const emailElement = document.getElementById('input-email');
const imgElement = document.getElementById('input-img');

formElement.addEventListener('submit', function(event) {

  event.preventDefault();
  
  let newObj = {
    name: nameElement.value,
    role: roleElement.value,
    email: emailElement.value,
    img: imgElement.value
  }

  teamMembers.push(newObj);

  console.log(teamMembers);

  addCard(nameElement.value, roleElement.value, emailElement.value, imgElement.value);
})

// card container
const cardContainerElement = document.querySelector('.container');

readArray(teamMembers);

// FUNCTIONS

// add card to html file
function readArray(arrayMembers) {

  for (let i = 0; i < arrayMembers.length; i++) {

    console.log(arrayMembers[i]);
    const userName = arrayMembers[i].name;
    const userRole = arrayMembers[i].role;
    const userEmail = arrayMembers[i].email;
    const userImg = arrayMembers[i].img;
  
    addCard(userName, userRole, userEmail, userImg);
  }
}

function addCard(valueName, valueRole, valueEmail, valueImg) {

  cardContainerElement.innerHTML += `<div class="card">
                                          <img src="${valueImg}" alt="${valueName}" id="profile-img">
                                          <div class="side-element">
                                            <h3 id="name">${valueName}</h3>
                                            <p id="role">${valueRole}</p>
                                            <p id="email">${valueEmail}</p>
                                          </div>
                                        </div>`;
}