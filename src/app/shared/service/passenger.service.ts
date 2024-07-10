import { Injectable } from '@angular/core';
import { Ichild, Ipassenger } from '../components/passenger/model/passengerInfo.interface';
import { SnackbarService } from './snackbar.service';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengerInfo  : Array<Ipassenger> = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children : [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }],
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
  ]

  constructor(
    private _snackbar : SnackbarService,
    private _dialog : DialogService
  ) { }

  fetchPassInfo(){
    return this.passengerInfo
  }

  updatePassInfo(updatePassObj : Ipassenger){
     let getupdatePassI = this.passengerInfo.findIndex(pass => pass.id === updatePassObj.id)
     let oldObj = this.passengerInfo[getupdatePassI]
     this.passengerInfo[getupdatePassI] = updatePassObj
     this._snackbar.openSnackBar(`${oldObj.fullname} is Updated to ${updatePassObj.fullname} successfully!!`)
  }

   removePassInfo(removePass : Ipassenger){
      this._dialog.openDialogConfirmation(`Remove Confirmation` ,
        `Are you Sure ? Do You Want to Remove ${removePass.fullname}`)
        .subscribe(result => {
          if(result){
            let getRemoveIndex = this.passengerInfo.findIndex(index => index.id === removePass.id)
           this.passengerInfo.splice(getRemoveIndex , 1)
           this._snackbar.openSnackBar(`Passenger ${removePass.fullname} removed successfully!!!`)
   
          }
        })
  }
  
}
