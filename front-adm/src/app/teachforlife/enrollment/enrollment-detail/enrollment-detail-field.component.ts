import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EnrollmentComponent, ViewType } from '../enrollment.component';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment-detail-field',
  templateUrl: './enrollment-detail-field.component.html',
  styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailFieldComponent extends EnrollmentComponent
        implements OnInit {
    @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public enrollmentService: EnrollmentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
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
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}
