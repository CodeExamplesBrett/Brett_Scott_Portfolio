import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

 /* {
    title: 'Portfolio',
    description: 'My portfolio site built with Angular',
    image: 'assets/img/Portfolio.jpg',
    category: 'angular',
    githubLink: 'https://github.com/',
    projectLink: '#'
  }, 
  
  import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      title: 'Portfolio',
      description: 'My personal Portfolio Site built with Angular',
      image: 'assets/img/Portfolio.jpg',
      category: 'angular',
      githubLink: 'https://github.com/benschuetze/portfolio',
      projectLink: '#'
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump and Run made with Javascript (OOP)',
      image: 'assets/img/Pollo-loco.jpg',
      category: 'javascript',
      githubLink: 'https://github.com/benschuetze/elpolloloco',
      projectLink: 'http://benjaminschuetze.de/pollo'
    },
    {
      title: 'Pokedex',
      description: 'Restful API based Pokemon viewer',
      image: 'assets/img/pokedex.jpg',
      category: 'javascript',
      githubLink: 'https://github.com/benschuetze/pokedex',
      projectLink: 'http://benjaminschuetze.de/pokedex'
    },
    {
      title: 'Join',
      description: 'Kanban built with Javascript as a group project',
      image: 'assets/img/Join.jpg',
      category: 'javascript',
      githubLink: 'https://github.com/TobiasMatthies/Join',
      projectLink: 'http://benjaminschuetze.de/join'
    },
    {
      title: 'KanBaneasy',
      description: 'Simple Kanban built with Angular and Firebase',
      image: 'assets/img/kanbaneasy.jpg',
      category: 'angular',
      githubLink: 'https://github.com/benschuetze/Kanbaneasy',
      projectLink: 'https://join-7cee9.web.app/'
    }, 
    {
      title: 'Ring of Fire',
      description: 'Web app version of the popular drinking game',
      image: 'assets/img/ringoffire.jpg',
      category: 'angular',
      githubLink: 'https://github.com/benschuetze/ringoffire',
      projectLink: 'https://ring-of-fire-d3a21.web.app'
    }
  ]; 


  typesOfProjects = {
    all : true,
    angular : false,
    javascript : false
  };
  


  filteredProjects = this.projects; 

  constructor() { }

  showProjects(category) {
    this.toggleButtons(category);
    if (category != 'all') {
      this.filteredProjects = this.projects.filter((p) => p.category == category);
    } else {
      this.filteredProjects = this.projects;
    }
    
  }

  toggleButtons(category) {
    for(let type in this.typesOfProjects) {
      if(type.toString() == category) {
        this.typesOfProjects[type] = true;
      } else {
        this.typesOfProjects[type] = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
  
  
  
  
  
  */



   myProjects = [
    
    {
      title: 'El Pollo Loco',
      description: 'a jump and run gamemade built with Javascript',
      image: 'assets/img/laptop/laptop_Pollo.png',
      category: 'javascript',
      githubLink: 'https://github.com/CodeExamplesBrett/EL_Pollo_Loco_2',
      projectLink: 'http://@brett--scott.com/El Pollo Loco/index.html'
    },
    {
      title: 'Join',
      description: 'Kanban board built with Javascript',
      image: 'assets/img/laptop/laptop_Join.png',
      category: 'javascript',
      githubLink: 'https://github.com/',
      projectLink: 'http://@brett--scott.com/Join/addtask.html'
    },
    {
      title: 'Pokedex',
      description: 'Rest API based pokemon viewer',
      image: 'assets/img/laptop/laptop_Poke.png',
      category: 'javascript',
      githubLink: 'https://github.com/CodeExamplesBrett/Pokedex_Scroll_simple',
      projectLink: 'http://brett--scott.com/Pokedex/index.html'
    },
    {
      title: 'My Portfolio Site',
      description: 'My portfolio website built with Angular',
      image: 'assets/img/laptop/laptop_Portfolio.png',
      category: 'angular',
      githubLink: 'https://github.com/',
      projectLink: 'http://brett--scott.com'
    },
    {
      title: 'Ring of fire',
      description: 'Web app card game',
      image: 'assets/img/laptop/laptop_Fire.png',
      category: 'angular',
      githubLink: 'https://github.com/',
      projectLink: 'http://brett--scott.com/RingOfFire/index.html'
    },
  ]


  projectType = {
    all : true,
    angular : false,
    javascript : false
  };

  filteredPros = this.myProjects;

  displayProjects(category) {
    this.toggleProButton(category);
    if(category != 'all') {
      this.filteredPros = this.myProjects.filter((p) => p.category == category);
    }
    else{
      this.filteredPros = this.myProjects;
    }

    console.log(category)
  }

  toggleProButton(category){
    for(let type in this.projectType){
      if(type.toString() == category){
        this.projectType[type] = true;
      } else {
        this.projectType[type] = false;
      }
    }
  }





  addBlack(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
