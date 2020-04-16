import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EnrollmentListComponent } from './enrollment-list.component';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment-list-sub',
  templateUrl: './enrollment-list-sub.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListSubComponent extends EnrollmentListComponent implements OnInit {
  public parentSchema;
  public parentItemId;

  constructor(
      public enrollmentService: EnrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, enrollmentService, injector, router, route, location);

        this.listCategory1 = {}; // no do query based on category for sub view;
        this.listCategory2 = {}; // no do query based on category for sub view;
  }

  ngOnInit() {
    
      this.parentSchema = this.getParentRouteRefField();
      let ref = this.referenceFieldsReverseMap[this.parentSchema];

      this.parentItemId = this.getParentRouteItemId();
      let id = this.parentItemId;

      this.detail = {};

      this.parentData = {};
      if (this.arrayFields.some(x=>x[0] == ref)) {
          this.parentData[ref] = {'selection':[{'_id': id}] }; 
          this.detail[ref] = {'selection':[{'_id': id}] }; //search on array list
      } else {
          this.parentData[ref] = {'_id': id };
          this.detail[ref] = {'_id': id }; //make this as the search context
      }
      this.searchList();
  }
}
