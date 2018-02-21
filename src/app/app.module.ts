import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
//importing firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DonorDetailComponent } from './component/donor-detail/donor-detail.component';
import { CreateDonorComponent } from './component/create-donor/create-donor.component';
import { DonorListComponent } from './component/donor-list/donor-list.component';
import { environment} from '../environments/environment';
import appRoutes from './routerConfig';


@NgModule({
  declarations: [
    AppComponent,
    DonorDetailComponent,
    CreateDonorComponent,
    DonorListComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
