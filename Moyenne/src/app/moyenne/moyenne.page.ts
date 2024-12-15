import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-moyenne',
  templateUrl: './moyenne.page.html',
  styleUrls: ['./moyenne.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MoyennePage implements OnInit {
  grade1: number;
  grade2: number;
  average: number;
  grade1Label: string;



  constructor() {
    this.grade1 = 0;
    this.grade2 = 0;
    this.average = 0;
    this.grade1Label = 'Grade 1';

   }


   
   getAverageColor(): string {
    const average = this.calculateAverage();
    return average < 10 ? 'red' : 'green';
  }

   calculateAverage():number {
    const numberOfGrades = 2; 
    const total = this.grade1 + this.grade2; 
    this.average = total / numberOfGrades;
    return this.average;
  }

 

  ngOnInit() {
  }

}
