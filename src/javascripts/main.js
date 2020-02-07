// import $ from 'jquery';

import projectData from '../../helpers/data/projectData';

import '../styles/main.scss';
import 'bootstrap';
import utilities from '../../helpers/utilities';

const populateProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let toPrint = `<div class="carousel-item active">
      <img src="${projects[0].imageUrl}" class="d-block w-100 carousel-img" alt="${projects[0].title}">
      <div class="carousel-caption d-none d-md-block">
        <h5><span class="project-link"><a href="${projects[0].url}">${projects[0].title}</a></span></h5>
        <p><span class="project-description">${projects[0].description}</span></p>
        <a href="${projects[0].githubUrl}"><img class="project-github-icon" src="https://cdn.iconscout.com/icon/free/png-256/github-170-1175028.png"></a>            
      </div>
    </div>
    `;
      toPrint += `<div class="carousel-item">
    <img src="${projects[1].imageUrl}" class="d-block w-100 carousel-img" alt="${projects[1].title}">
    <div class="carousel-caption d-none d-md-block">
    <h5><span class="project-link"><a href="${projects[1].url}">${projects[1].title}</a></span></h5>
    <p><span class="project-description">${projects[1].description}</span></p>
    <a href="${projects[1].githubUrl}"><img class="project-github-icon" src="https://cdn.iconscout.com/icon/free/png-256/github-170-1175028.png"></a> 
    </div>
  </div>`;
      toPrint += `<div class="carousel-item">
    <img src="${projects[2].imageUrl}" class="d-block w-100 carousel-img" alt="${projects[2].title}">
    <div class="carousel-caption d-none d-md-block">
    <h5><span class="project-link"><a href="${projects[2].url}">${projects[2].title}</a></span></h5>
    <p><span class="project-description">${projects[2].description}</span></p>
    <a href="${projects[2].githubUrl}"><img class="project-github-icon" src="https://cdn.iconscout.com/icon/free/png-256/github-170-1175028.png"></a> 
    </div>
  </div>`;
      toPrint += `<div class="carousel-item">
    <img src="${projects[3].imageUrl}" class="d-block w-100 carousel-img" alt="${projects[3].title}">
    <div class="carousel-caption d-none d-md-block">
    <h5><span class="project-link"><a href="${projects[3].url}">${projects[3].title}</a></span></h5>
    <p><span class="project-description">${projects[3].description}</span></p>
    <a href="${projects[3].githubUrl}"><img class="project-github-icon" src="https://cdn.iconscout.com/icon/free/png-256/github-170-1175028.png"></a> 
    </div>
  </div>`;
      toPrint += `<div class="carousel-item">
    <img src="${projects[4].imageUrl}" class="d-block w-100 carousel-img" alt="${projects[4].title}">
    <div class="carousel-caption d-none d-md-block">
    <h5><span class="project-link"><a href="${projects[4].url}">${projects[4].title}</a></span></h5>
    <p><span class="project-description">${projects[4].description}</span></p>
    <a href="${projects[4].githubUrl}"><img class="project-github-icon" src="https://cdn.iconscout.com/icon/free/png-256/github-170-1175028.png"></a> 
    </div>
  </div>`;
      utilities.printToDom('project-carousel', toPrint);
    })
    .catch((errorGettingProjects) => console.error(errorGettingProjects));
};

populateProjects();
