import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [IonItem, IonList, IonContent, IonTitle, IonToolbar, IonMenu, IonHeader,RouterLink]
})
export class MainMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
