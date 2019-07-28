import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/one">Route One </a>
      <a routerLink="/two">Route Two</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  public do(): void {
    this.dataService.first().subscribe((res) => console.log('call one complete')); 
    this.dataService.fourth().subscribe((res) => console.log('call four complete'));
    this.dataService.second().subscribe((res) => {
      console.log('call two complete')
      this.dataService.third().subscribe(() => console.log('call three complete'));
    });
    this.dataService.fifth().subscribe((res) => console.log('call five complete'));
  }

  do6() {
    this.dataService.sixth().subscribe((res) => console.log('call six complete')); 
  }
}
