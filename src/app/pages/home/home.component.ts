import { Component, OnInit } from '@angular/core';

// @ts-ignore
import typeWriter from 't-writer.js';

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
    this.writer1(typeWriter);
  }


  // tslint:disable-next-line:no-shadowed-variable typedef
  writer1(typeWriter: any) {
    const target = document.querySelector('.tw1');

    const writer1 = new typeWriter(target, {
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 30,
      typeColor: '#fff'
    });

    writer1
      .type('Show me the code.')
      .rest(1500)
      .remove(7)
      .rest(200)
      .clear()
      .type('Discovered technologies.')
      .rest(1500)
      .remove(13)
      .rest(200)
      .clear()
      .type('Discovered all project.')
      .rest(2000)
      .clear()
      .start();
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
