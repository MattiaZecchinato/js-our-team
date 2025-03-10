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

const cardContainerElement = document.querySelector('.container');

addCard(teamMembers);

// FUNCTIONS

// add card to html file
function addCard(arrayMembers) {

  for (let i = 0; i < arrayMembers.length; i++) {

    console.log(arrayMembers[i]);
    const userName = arrayMembers[i].name;
    const userRole = arrayMembers[i].role;
    const userEmail = arrayMembers[i].email;
    const userImg = arrayMembers[i].img;
  
    cardContainerElement.innerHTML += `<div class="card">
                                          <img src="${userImg}" alt="${userName}" id="profile-img">
                                          <div class="side-element">
                                            <h3 id="name">${userName}</h3>
                                            <p id="role">${userRole}</p>
                                            <p id="email">${userEmail}</p>
                                          </div>
                                        </div>`;
  }
}