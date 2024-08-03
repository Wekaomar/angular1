import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class portfolioComponent {
    modelImg:any = '';
    flag:boolean = true;
  
    srcs:(string|undefined)[] = [
      "../assets/images/poert1.png",
      "../assets/images/port2.png",
      "../assets/images/port3.png",
      "../assets/images/port2.png",
      "../assets/images/port3.png",
      "../assets/images/poert1.png"
    ];
  
    hideModel(element:EventTarget|null,img:HTMLImageElement):void{
      if(element == img) return;
        this.flag = true
  
  
    }
  
    constructor(){}
  }