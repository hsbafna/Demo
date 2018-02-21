import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import {donor} from './donor.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class donorService {
  private subject = new Subject<any>();
  donorList:AngularFireList<any>;
  public storage:any;
  constructor(private firebase:AngularFireDatabase){}
  getData(){
     this.donorList = this.firebase.list('donorList');
    return this.donorList;
  }
  setDonor(donor:donor){
    this.subject.next({donor:donor});
  };
  getDonor(): Observable<any> {
        return this.subject.asObservable();
    }
}
