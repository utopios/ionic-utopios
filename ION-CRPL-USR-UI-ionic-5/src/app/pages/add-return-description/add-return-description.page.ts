import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-add-return-description',
  templateUrl: './add-return-description.page.html',
  styleUrls: ['./add-return-description.page.scss'],
})
export class AddReturnDescriptionPage implements OnInit {

  public head = 'Anything to add about your ride?';
  public placeholder = 'Hello i\'m going to visit my family. I travel with a cat and I have a lot of space in the van!';
  public returnDesc = '';
  constructor(private route: Router, public dataService: DataService) { }

  ngOnInit() {
  }
  rideSuccess() {
    this.dataService.returnRideDetails.description = this.returnDesc;
    this.route.navigate(['offer-ride-confirmation']);
  }

}
