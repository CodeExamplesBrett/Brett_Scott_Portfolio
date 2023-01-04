import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { window } from 'rxjs';
import { Router } from '@angular/router';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private viewContainerRef: ViewContainerRef) { }
  menuToggle = true;

  
 
  ngOnInit(): void {}

  showDropdown(){
    this.menuToggle != this.menuToggle;
  }

  responsiveLink(link: string) {
    this.router.navigateByUrl(link);
    this.menuToggle = false;
    console.log('state', this.menuToggle)
  }


}
