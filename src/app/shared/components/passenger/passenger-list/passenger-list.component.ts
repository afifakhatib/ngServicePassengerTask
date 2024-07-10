import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../model/passengerInfo.interface';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit{

  @Input() passList !: Ipassenger

  constructor() {}

  ngOnInit(): void {

  }
}
