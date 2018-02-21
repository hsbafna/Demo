import { Component ,OnInit} from '@angular/core';
import { donorService } from './component/shared/donor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[donorService]
})
export class AppComponent implements OnInit {
ngOnInit(){};
  constructor(private donorService:donorService){};
title = 'Angular Router Tutorial';
}
