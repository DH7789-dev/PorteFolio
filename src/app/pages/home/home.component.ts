import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textNone = 'first';
  avis = 'first';

  constructor() { }

  ngOnInit(): void {
  }


  changeText(nameChange: string): void{
    this.textNone = nameChange;
  }


  ChangeOpinion(avisChange: string): void{
    this.avis = avisChange;
  }

  scroll(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
