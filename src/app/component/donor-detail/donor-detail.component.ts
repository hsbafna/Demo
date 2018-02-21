import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { donorService } from '../shared/donor.service';
import {donor} from '../shared/donor.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-donor-detail',
  templateUrl: './donor-detail.component.html',
  styleUrls: ['./donor-detail.component.css']
})
export class DonorDetailComponent implements OnInit {

   subscription: Subscription;

  private donorDetails:donor;
  constructor(private route: ActivatedRoute,private donorService:donorService) {
      this.subscription = this.donorService.getDonor().subscribe( donor=>{this.donorDetails=donor;}
      );
}


  ngOnInit() {

  }

}
