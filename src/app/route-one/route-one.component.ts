import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.first().subscribe((res) => console.log('call one complete')); 
    this.dataService.fourth().subscribe((res) => console.log('call four complete'));
    this.dataService.second().subscribe((res) => {
      console.log('call two complete')
      this.dataService.third().subscribe(() => console.log('call three complete'));
    });
    this.dataService.fifth().subscribe((res) => console.log('call five complete'));
  }

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
