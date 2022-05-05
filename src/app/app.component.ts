import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private router: Router){}

  title = 'monitoring';

  textButtonChange = 'Сменить режим (мониторинг / заявка)'; 

  ngOnInit(): void {
    this.router.navigate(['/requests']);
  }

  toRequest(){
    this.router.navigate(['/requests']);
  }

  toMonitoring(){
    this.router.navigate(['/monitoring']);
  }

  toManager(){
    this.router.navigate(['/administration']);
  }

}
