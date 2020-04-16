import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EnrollmentComponent, ViewType } from '../enrollment.component';
import { EnrollmentService } from '../enrollment.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-enrollment-detail',
  templateUrl: './enrollment-detail.component.html',
  styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailComponent extends EnrollmentComponent implements OnInit, AfterViewInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions
  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public enrollmentService: EnrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                enrollmentService, injector, router, route, location, ViewType.DETAIL);

          this.enums['status'] = ['processing', 'paid', 'confirmed', 'cancelled', ];

          this.stringFields.push('name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('status');
          this.stringFields.push('notes');
          this.stringFields.push('adminNotes');

          this.referenceFields = ['tutor', ];

          this.dateFields = ['createdAt', ];





          this.textareaFields = ['notes', 'adminNotes', ];

  }

  ngOnInit() {
      this.style = this.style || {};
      this.options = this.options || {};
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
