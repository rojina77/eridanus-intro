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
const messageForm=document.getElementById("leave_message");
messageForm.addEventListener('submit',  (event)=> {
    event.preventDefault();
    const nameValue=event.target.name.value;
    const emailValue=event.target.email.value;
    const messageValue=event.target.message.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);
    const messageSection=document.getElementById("messages");
    const messageList= messageSection.querySelector('ul');
    const newMessage=document.createElement('li');
    newMessage.innerHTML=`<a href="mailto:${emailValue}">${nameValue}</a> <span> ${messageValue} </span>`;
    //newMessage.innerHTML=('<a href="mailto:emailValue">${nameValue}</a>');
    console.log(newMessage)
    const removeButton=document.createElement('button');
    removeButton.innerText='remove';
    console.log(removeButton);
    removeButton.type="button";
    removeButton.addEventListener('click',  (remove)=>{
        const entry=removeButton.parentNode;
         messageList.removeChild(newMessage);
        entry.remove();  
    })
     messageForm.reset()
    newMessage.appendChild(removeButton);
})
  //var githubRequest = new XMLHttpRequest();
//githubRequest.open('GET', 'https://api.github.com/users/rojina77/repos');
  //githubRequest.send(); 
  //githubRequest.addEventListener("load", ()=> {
    //const repositories = JSON.parse(githubRequest.responseText);
    //console.log(repositories);
    
    //const projectSection = document.getElementById("projects");
    //const projectList = projectSection.querySelector("ul");
    //for (let i = 0; i < repositories.length; i++) {
      //const project = document.createElement("li");

     //const projectLink = document.createElement("a");
      //projectLink.innerText = repositories[i].name;
      //projectLink.href  = repositories[i].html_url;
      //projectLink.target = "_blank";

     //const projectDescription = document.createElement("p");
      //projectDescription.innerText = repositories[i].description;
      //const projectDate = document.createElement("p");
     
     // project.appendChild(projectLink);
      //project.appendChild(projectDate);
      //project.appendChild(projectDescription);
      //projectList.appendChild(project);
  
      //project.style.listStyleType = "none";
      //project.style.borderBottom = "1px solid black";
      //project.style.margin = "1rem 0";
    //}
  //})
//githubRequest.onerror = function (){
  //console.log("Connection error");
//};
fetch('https://api.github.com/users/rojina77/repos')
  .then(response => response.json())
  .then(repositories => {
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector('ul')
    for (let i = 0; i < repositories.length; i++) {
      const projects= document.createElement('li');
      projectList.appendChild(projects);
      const projectLink=document.createElement("a");
      projectLink.innerText=repositories[i].name;
      projectLink.href=repositories[i].html_url;
      projectLink.target="_blank";
      projects.appendChild(projectLink);
      const projectDescription= document.createElement('p');
      projectDescription.innerText=repositories[i].description;
      projects.appendChild(projectDescription);
    }
  });
