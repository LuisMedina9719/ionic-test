import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title, imageURL){
    this.placesService.addPlace(title.value, imageURL.value);
    this.router.navigate(['/places'])
  }
}
