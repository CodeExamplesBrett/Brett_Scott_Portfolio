import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
