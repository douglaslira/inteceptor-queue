import { Component, OnInit } from '@angular/core';
import { CompService } from './component-one.service';
@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor(
    private _cs: CompService
  ) { }

  ngOnInit() {
    this._cs.first().subscribe((res) => console.log('Comp 1 call one complete')); 
    this._cs.second().subscribe((res) => console.log('Comp 1 call second complete'));

    setTimeout(() => {
      this._cs.eight().subscribe((res) => console.log('Comp 1 call eight complete'));
    }, 8000);
  }

}
