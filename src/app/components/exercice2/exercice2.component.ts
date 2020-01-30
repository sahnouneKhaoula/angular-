import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

  count: number = 0;
  points: number = 0;

  random_number : number = 0;
  compared_number: number = 0;

  message: string = null;

  results: Observable<number>;


  constructor() { 
    this.generate_numbers();
  }

  action(action) {
    if( action == "restart"){
      this.count=0;
      this.points=0;
      this.generate_numbers();    
      return;
    }

     if(this.test(action)){
       this.points++;
     }

     this.count++;

     this.results = new Observable(observer => observer.next(this.count));

     this.results.subscribe(count => {
        if(count<=10) {
          this.generate_numbers();
          if(this.count >= 10 && this.points > 4){
            this.message = " You Win!."
          }else if(this.count >= 10 && this.points < 5){
            this.message = " You Lose!."
          }else{
            this.message = null;
          }
        }else{
          this.count = 0;
          this.message = null;
        }
      });
  }

  test(action){
    if( action == "up" && this.compared_number > this.random_number ){
      return true;
    }
    
    if( action == "down" && this.compared_number < this.random_number ){
      return true
    }

    return false;
  }

  generate_numbers(){
    this.random_number = Math.floor(Math.random() * 50);
    this.compared_number = Math.floor(Math.random() * 50);
  }

  ngOnInit() {}

}
