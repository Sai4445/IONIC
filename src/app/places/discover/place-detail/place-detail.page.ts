import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place;

  constructor(public router:Router,public route:ActivatedRoute,public placesService:PlacesService,public navCtrl:NavController,public modalCtrl:ModalController,public actionSheet:ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place=this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
onBookPlace(){
  this.actionSheet.create({
    header:'Choose An Action',
    buttons:[
     {
       text:'Select Date',
       handler:()=>{
         this.openBookingModel('select');
       }
     },
     {
       text:'Random Date',
       handler:()=>{
         this.openBookingModel('random');
       }
     },
     {
       text:'Cancel',
       role:'destructive'
     }
    ]
  }).then(actionsheetEl=>{
    actionsheetEl.present();
  });

}
openBookingModel( mode:'select' | 'random' ){
  console.log(mode);
  this.modalCtrl.create({component: CreateBookingComponent,componentProps:{selectedPlace:this.place,selectedMode:mode}}).then(modalEl =>{
    modalEl.present();
    return modalEl.onDidDismiss();
  }).then(resuldata=>{
    console.log(resuldata.data, resuldata.role);
    if(resuldata.role === 'confirm'){
      console.log('Booked!');

    }
  });

}
}
