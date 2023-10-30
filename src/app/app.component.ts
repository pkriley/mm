import { Component } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mystery-mayhem';

  bookingDate: Date | undefined;
  bookingTime: String = "";

  currentDate: Date | null = new Date()

  times = [
    "9:45 AM",
    "11:00 AM",
    "12:15 PM",
    "1:30 PM",
    "2:45 PM",
    "4:00 PM",
    "5:15 PM",
    "6:30 PM",
    "7:45 PM",
    "9:00 PM",
    "10:15 PM"
  ]

  excludedDates = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 1 && day !== 2
  }

  book() {
    console.log(this.bookingDate)
    console.log(this.bookingTime)
  }

  //Fires whenever input date is changed - make API call to update times
  dateChange(event: any) {
    let momentTime = moment(event.value)
    console.log(momentTime.month() + 1, momentTime.date())
  }
}
