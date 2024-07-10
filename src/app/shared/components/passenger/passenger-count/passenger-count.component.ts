import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit , OnChanges{

  @Input() getTotalcount !: number
 @Input() getCheckInCount !: number

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
       console.log(changes);
  }

  ngOnInit(): void {
  }

}
