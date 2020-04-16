import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EnrollmentDetailComponent } from './enrollment-detail.component';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment-detail-sub',
  templateUrl: './enrollment-detail-sub.component.html',
  styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailSubComponent extends EnrollmentDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        public enrollmentService: EnrollmentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,enrollmentService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }

    ngAfterViewInit() {
    }
}
