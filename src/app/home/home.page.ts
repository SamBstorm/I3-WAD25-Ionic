import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons],
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
