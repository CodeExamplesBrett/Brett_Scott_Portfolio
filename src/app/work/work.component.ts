import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


   myProjects = [
    
    {
      title: 'El Pollo Loco',
      description: 'a jump and run gamemade built with Javascript',
      image: 'assets/img/laptop/laptop_Pollo.png',
      category: 'javascript',
      githubLink: 'https://github.com/CodeExamplesBrett/EL_Pollo_Loco_2',
      projectLink: 'https://@brett--scott.com/El Pollo Loco/index.html'
    },
    {
      title: 'Join',
      description: 'Kanban board built with Javascript',
      image: 'assets/img/laptop/laptop_Join.png',
      category: 'javascript',
      githubLink: 'https://github.com/CodeExamplesBrett/My_Join',
      projectLink: 'https://join.brett--scott.com/addtask.html'
    },
    {
      title: 'Pokedex',
      description: 'Rest API based pokemon viewer',
      image: 'assets/img/laptop/laptop_Poke.png',
      category: 'javascript',
      githubLink: 'https://github.com/CodeExamplesBrett/Pokedex_Scroll_simple',
      projectLink: 'https://brett--scott.com/Pokedex/index.html'
    },
    {
      title: 'My Portfolio Site',
      description: 'My portfolio website built with Angular',
      image: 'assets/img/laptop/laptop_Portfolio.png',
      category: 'angular',
      githubLink: 'https://github.com/CodeExamplesBrett/Brett_Scott_Portfolio',
      projectLink: 'https://brett--scott.com'
    },
    {
      title: 'Ring of fire',
      description: 'Web app card game',
      image: 'assets/img/laptop/laptop_Fire.png',
      category: 'angular',
      githubLink: 'https://github.com/CodeExamplesBrett/Ring_of_Fire',
      projectLink: 'https://ringoffire.brett--scott.com/index.html'
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

}
