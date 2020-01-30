import { Component, OnInit } from '@angular/core';
import { Action } from '../../model/actions';
import { Observable,interval } from 'rxjs';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})

export class Exercice1Component implements OnInit {

  time: Date;
  clock: Observable<Date>;

  secondHand;
  hourHand;
  minuteHand;

  hour;
  minute;
  second;

  hDeg;
  mDeg;
  sDeg;


  constructor() {

    this.clock = new Observable( observer =>
       interval(1000).subscribe(sec => observer.next(new Date()))
    ); 
  }

  actionClicked(a: Action) {
    alert(`Vous avez cliqué ${a.title}`);
  }

  ngOnInit() {
    this.clock.subscribe( time => {
      this.time = time;

      this.hour = time.getHours();
      this.minute = time.getMinutes();
      this.second = time.getSeconds();


      this.hDeg = this.hour * 30 + this.minute * (360/720);
      this.mDeg = this.minute * 6 + this.second * (360/3600);
      this.sDeg = this.second * 6;


      this.secondHand = {
        'transform':'rotate('+this.sDeg+'deg)',
      };

      this.hourHand = {
        'transform':'rotate('+this.hDeg+'deg)',
      };

      this.minuteHand = {
        'transform':'rotate('+this.mDeg+'deg)',
      };

    });
  }
}


