import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[]=[
    new Place('Place1','Mansion','New york','https://upload.wikimedia.org/wikipedia/commons/5/5e/Midtown_Manhattan_2019.jpg',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place2','Eifel Tower','Paris','https://i.pinimg.com/originals/75/f9/4f/75f94fbde245757e1614dc6338f9313e.jpg',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),
    new Place('Place3','Pub','New york','http://teach.files.bbci.co.uk/archive/sets/2005_Eastenders_Oueen_Vic_2_hi003892280.jpg ',122000,new Date('2019-01-01'),new Date('2019-12-01'),),


  ];
  get places(){
    return[...this._places];
  }

  constructor() { }
  getPlace(id: string){


    return {...this._places.find(p=>p.id === id)};

  }
}
