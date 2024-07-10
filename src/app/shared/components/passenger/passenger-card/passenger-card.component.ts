import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ipassenger } from '../model/passengerInfo.interface';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit  {

  @Input() passengerObj !: Ipassenger

  @Output() emitRemovecount : EventEmitter<boolean> = new EventEmitter<boolean>()

  isEditMode !: boolean

  constructor(
    private _pass : PassengerService
  ) { }



  ngOnInit(): void {}

  onUpdate(fullname : HTMLInputElement){
    // console.log(fullname);
    // this.passengerObj.fullname = fullname.value
    this.passengerObj = {...this.passengerObj , fullname : fullname.value}
    this.isEditMode = false
    this._pass.updatePassInfo(this.passengerObj)
  }

  onRemove(){
    this._pass.removePassInfo(this.passengerObj)
    this.emitRemovecount.emit(true)
  }

}
