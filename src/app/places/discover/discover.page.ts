import { Component, OnInit } from '@angular/core';

import { Place } from '../place.model';
import { PlacesService } from '../places.service';



@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces:Place[];
  listedLoadedPlaces:Place[];

  constructor(public placesService: PlacesService) { }

  ngOnInit() {
this.loadedPlaces=this.placesService.places;
this.listedLoadedPlaces=this.loadedPlaces.slice(1);
  }

}

