import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { donorService } from '../shared/donor.service';
import {donor} from '../shared/donor.model';
@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donorList:donor[];
  constructor(private donorService:donorService,private router: Router) {
  }

  ngOnInit() {
    var getDonorList = this.donorService.getData();
    getDonorList.snapshotChanges().subscribe(donor =>{
      this.donorList=[];
        donor.forEach(
            element=>{

              var y =element.payload.toJSON();
              console.log(y);
                y["$key"] = element.key;
                console.log(  y["$key"]);
                this.donorList.push(y as donor);
            }
        );
    });


  };
  displayDetail(donor){
    this.donorService.setDonor(donor);
     this.router.navigate(['donorDetail']);
  };

}
