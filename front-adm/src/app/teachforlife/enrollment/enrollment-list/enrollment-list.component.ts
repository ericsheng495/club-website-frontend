import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { EnrollmentComponent, ViewType } from '../enrollment.component';
import { EnrollmentService } from '../enrollment.service';


import { ComponentFactoryResolver } from '@angular/core';

  
@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent extends EnrollmentComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public enrollmentService: EnrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                enrollmentService, injector, router, route, location, ViewType.LIST);

          this.enums['status'] = ['processing', 'paid', 'confirmed', 'cancelled', ];

          this.stringFields.push('name');
          this.stringFields.push('email');
          this.stringFields.push('status');

          this.referenceFields = ['tutor', ];

          this.dateFields = ['createdAt', ];







          this.listViewFilter = 'list';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.searchList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new EnrollmentListComponent(null, null, null, null, null, null);
  }
}

