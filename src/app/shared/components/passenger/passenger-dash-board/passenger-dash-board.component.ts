import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../model/passengerInfo.interface';
import { PassengerService } from 'src/app/shared/service/passenger.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-passenger-dash-board',
  templateUrl: './passenger-dash-board.component.html',
  styleUrls: ['./passenger-dash-board.component.scss']
})
export class PassengerDashBoardComponent implements OnInit {

  passengerArr !: Array<Ipassenger>

  TotalCheckIn !: number;
  Totalcount !: number; 


  constructor(
    private _pass : PassengerService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.passengerArr = this._pass.fetchPassInfo()
    this.getCount()
    this._snackbar.openSnackBar(`fetched passenger info successfully!!`)

    // this.TotalCheckIn = this.passengerArr.filter(check => check.checkedIn).length
    // this.Totalcount = this.passengerArr.length
  }

  getCount(){
    this.Totalcount = this.passengerArr.length 
    this.TotalCheckIn = this.passengerArr.filter(check => check.checkedIn).length
  }

  // recheck(){
  //   this.getCount()
  // }

}
