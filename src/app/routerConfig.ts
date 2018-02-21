import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CreateDonorComponent } from './component/create-donor/create-donor.component';
import { DonorDetailComponent } from './component/donor-detail/donor-detail.component';
import { DonorListComponent } from './component/donor-list/donor-list.component';
import {environment }from '../environments/environment';
import { donorService } from './component/shared/donor.service';
import {donor} from './component/shared/donor.model';

const appRoutes : Routes =[
  {
    path: '', redirectTo: 'AppComponent', pathMatch: 'full'

  },
  {
    path:'createDonor',
    component:CreateDonorComponent
  },
  {
    path:'donorDetail',
    component:DonorDetailComponent
  },
  {
    path:'detail',
  component:DonorDetailComponent

  }
];
export default appRoutes;
