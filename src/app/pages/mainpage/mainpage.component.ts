import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  package = false;
  totalEmployees = 0;
  totalComplains = 0;
  totalJobs = 0;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllEmployees().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const did = a.payload.doc.id;
      // console.log(did);
      return { did, ...data };
    })))
      .subscribe((res: any) => {
        console.log('Employees Records ', res);
        
        this.totalEmployees = res.length;
      }, err => {
        console.log('Employees records error ', err.message);
      });
    this.api.getAllCompany().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const did = a.payload.doc.id;
      // console.log(did);
      return { did, ...data };
    })))
      .subscribe((res: any) => {
        console.log('res of Companies ', res);
        
        this.totalComplains = res.length;
      }, err => {
        console.log('Complains records error ', err.message);
      });
    this.api.getAllJobs().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const did = a.payload.doc.id;
      // console.log(did);
      return { did, ...data };
    })))
      .subscribe((res: any) => {
        console.log('Jobs Records ', res);

        this.totalJobs = res.length;
      }, err => {
        console.log('Jobs records error ', err.message);
      });
  } // ngOnInIt end

  packages() {
    this.package = true;
    alert('now package has dummy data');
  }
}
