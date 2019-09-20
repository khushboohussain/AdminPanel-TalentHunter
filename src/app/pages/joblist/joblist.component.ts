import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  p = 1;
  searchText = '';
  constructor() { }

  ngOnInit() {
  }

  activeJobs() {
    alert('Active Jobs is clicked!');
  }
  finishJobs() {
    alert('Active Jobs is clicked!');
  }

  employee = [
    {
      id: 'edcfvgbhnjm',
      customerUserName: 'abdull',
      totalAmount: 200,
      currency: 'PKR',
      status: 'Delivered'
    },
    {
      id: 'edcfvgbhnjm',
      customerUserName: 'abdull',
      totalAmount: 200,
      currency: 'PKR',
      status: 'Delivered'
    }
    , {
      id: 'edcfvgbhnjm',
      customerUserName: 'abdull',
      totalAmount: 200,
      currency: 'PKR',
      status: 'Delivered'
    }
    , {
      id: 'edcfvgbhnjm',
      customerUserName: 'abdull',
      totalAmount: 200,
      currency: 'PKR',
      status: 'Delivered'
    }
    , {
      id: 'edcfvgbhnjm',
      customerUserName: 'abdull',
      totalAmount: 200,
      currency: 'PKR',
      status: 'Delivered'
    }
    , {
      id: 'edcfvgbhnjm',
      customerUserName: 'abdull',
      totalAmount: 200,
      currency: 'PKR',
      status: 'Delivered'
    }
  ]

  // Search Data
  filterCondition(product) {
    return product.id.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
