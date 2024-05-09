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

  /*
  * <div class="section-feedback">
  <div class="content-title-feedback">
    <div class="title-feedback">FeedBack</div>
    <div class="subtitle-feedback">what my clients about me</div>
  </div>
  <div class="container-feedback">
    <div class="about-me">
      <div class="content-icon">
        <div class="stars">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div class="icon"></div>
      </div>
      <div *ngIf="avis=='first'" class="about">La collaboration avec David pendant une durée de 12 mois a été très efficiente, il a su répondre correctement et dans les délais à toutes nos attentes! Je recommande vivement son profil technique</div>
      <div *ngIf="avis=='second'" class="about">Avis 2 clients Avis clients Avis clients Avis clients Avis clients Avis clients v Avis clients Avis clients Avis clientsAvis clients Avis clients v Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients </div>
      <div *ngIf="avis=='third'" class="about">Avis 3 clients Avis clients Avis clients Avis clients Avis clients Avis clients v Avis clients Avis clients Avis clientsAvis clients Avis clients v Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients Avis clients </div>
    </div>
    <div class="profil-container-about">
      <div class="profil-about" (click)="ChangeOpinion('first')">
        <div class="content-profil">
          <div class="image-profil">
            <img  src="../../../assets/images/home/maxime.jpg" alt="">
          </div>
          <div class="more-profil">
            <div class="name-client">Maxime Sahagian</div>
            <div class="activity-client">foundateur <span style="color: #63F3AB">Webind</span></div>
          </div>
        </div>
        <div class="bar" [style.background-color]="avis == 'first' ? '#63F3AB' : '#87888E' " (click)="ChangeOpinion('first')"></div>
      </div>
      <div class="profil-about" (click)="ChangeOpinion('second')">
        <div class="content-profil">
          <div class="image-profil">
            <img src="../../../assets/images/home/me.png" alt="">
          </div>
          <div class="more-profil">
            <div class="name-client">David</div>
            <div class="activity-client">Co-foundateur <span style="color: #63F3AB">oversea</span></div>
          </div>
        </div>
        <div class="bar" [style.background-color]="avis == 'second' ? '#63F3AB' : '#87888E' " (click)="ChangeOpinion('second')"></div>
      </div>
      <div class="profil-about" style="margin-right: 0px" (click)="ChangeOpinion('third')">
        <div class="content-profil">
          <div class="image-profil">
            <img src="../../../assets/images/home/me.png" alt="">
          </div>
          <div class="more-profil">
            <div class="name-client">David</div>
            <div class="activity-client">Co-foundateur <span style="color: #63F3AB">oversea</span></div>
          </div>
        </div>
        <div class="bar" [style.background-color]="avis == 'third' ? '#63F3AB' : '#87888E' " ></div>
      </div>
    </div>
  </div>
</div>
  * */
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
