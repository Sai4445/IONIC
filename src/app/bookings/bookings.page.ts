import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss']
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: Booking[];
  public bookingSub: Subscription;

  constructor(
    public bookingService: BookingService,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
  this.bookingSub=  this.bookingService.bookings.subscribe(bookings => {
      this.loadedBookings = bookings;
    });
  }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadingCtrl.create({ message: 'Cancelling...' }).then(loadingEl => {
      loadingEl.present();
      this.bookingService.cancelBooking(bookingId).subscribe(() => {
        loadingEl.dismiss();
      });
    });
  }

  ngOnDestroy() {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }
}
