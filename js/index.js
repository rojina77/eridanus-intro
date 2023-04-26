const today = new Date();
const thisyear = today.getFullYear();
const footerEl = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = 'Rojina Pradhan '+ thisyear;
footerEl.appendChild(copyright);

const skills = ["MS Office", "Canva", "Adobe", "HTML","JavaScript","Quadralingual","Social media tools"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector ("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
let messageSection = document.getElementById("messages");
messageSection.style.display = "none";
messageSection.addEventListener('submit', event => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const message = event.target.message.value;

const messageForm = document.forms.leave_message;
const messageList = messageSection.querySelector('ul');
  // create a new list item (li) element and store it in a variable named newMessage
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${messages}</span>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', () => {
  });
    const entry = removeButton.parentNode;
    entry.remove();
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});

  var githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/rojina77/repos');
  githubRequest.send(); 
  githubRequest.addEventListener("load", ()=> {
    const repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);
    
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");

      const projectLink = document.createElement("a");
      projectLink.innerText = repositories[i].name;
      projectLink.href  = repositories[i].html_url;
      projectLink.target = "_blank";

      const projectDescription = document.createElement("p");
      projectDescription.innerText = repositories[i].description;
      const projectDate = document.createElement("p");
     
      project.appendChild(projectLink);
      project.appendChild(projectDate);
      project.appendChild(projectDescription);
      projectList.appendChild(project);
  
      project.style.listStyleType = "none";
      project.style.borderBottom = "1px solid black";
      project.style.margin = "1rem 0";
    }
  })
githubRequest.onerror = function (){
  console.log("Connection error");
};
fetch('https://api.github.com/users/rojina77/repos')
  .then(response => response.json())
  .then(data => {
    const repoList = document.getElementById('repos');
    data.forEach(repo => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.textContent = repo.name;
      listItem.appendChild(link);
      repoList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
