import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonMenuButton } from '@ionic/angular/standalone';
import { MainMenuComponent } from "../shared/components/main-menu/main-menu.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, MainMenuComponent, IonMenuButton],
})
export class HomePage {
  @ViewChild(IonContent) content! : IonContent;
  constructor() {}

  public onClickBottom() : void{
    this.content.scrollToBottom(500);
  }
  
  public onClickTop() : void{
    this.content.scrollToTop(500);    
  }

  public onScroll(event : any) : void{
    console.log(event);
  }
}
