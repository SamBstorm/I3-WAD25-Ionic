import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonItemGroup, IonItemDivider, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemDivider, IonItemGroup, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel]
})
export class ListPage implements OnInit {

  public students : string[] = [
    'Laura',
    'Yuliia',
    'Chuong',
    'Orsula',
    'Ceren',
    'Ayla'
  ];

  constructor() { }

  ngOnInit() {
  }

}
