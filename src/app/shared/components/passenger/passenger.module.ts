import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import { PassengerDashBoardComponent } from './passenger-dash-board/passenger-dash-board.component';
import { MaterialModule } from '../../material/material.module';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';



@NgModule({
  declarations: [
    PassengerListComponent,
    PassengerCardComponent,
    PassengerDashBoardComponent,
    PassengerCountComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
   exports : [
    PassengerListComponent,
    PassengerCardComponent,
    PassengerDashBoardComponent,
    PassengerCountComponent,
   ]
})
export class PassengerModule { }
