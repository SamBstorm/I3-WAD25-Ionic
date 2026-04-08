import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonMenuButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { MainMenuComponent } from "src/app/shared/components/main-menu/main-menu.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, MainMenuComponent]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
