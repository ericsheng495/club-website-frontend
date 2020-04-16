import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

const itemCamelName = 'sign Up';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { TeachforlifeRefSelectDirective } from '../teachforlife.component';

import { TutorDetailSelComponent } from '../tutor/tutor-detail/tutor-detail-sel.component';
import { TutorDetailPopComponent } from '../tutor/tutor-detail/tutor-detail-pop.component';
import { TutorListSelectComponent } from '../tutor/tutor-list/tutor-list-select.component';


export class EnrollmentComponent extends MddsBaseComponent {

    public selectComponents = {

      'tutor': {
          'select-type': TutorListSelectComponent,
          'select-detail-type': TutorDetailSelComponent,
          'pop-detail-type': TutorDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(TeachforlifeRefSelectDirective, {static: true}) refSelectDirective: TeachforlifeRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public enrollmentService: EnrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(enrollmentService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['email', 'Email']);this.briefFieldsInfo.push(['grade', 'Grade']);this.briefFieldsInfo.push(['status', 'Status']);this.briefFieldsInfo.push(['tutor', 'Tutor']);this.briefFieldsInfo.push(['createdAt', 'Created at']);



        this.referenceFieldsMap = {'tutor': 'tutor',};
        this.referenceFieldsReverseMap = {'tutor': 'tutor',};
        this.emailFields = [['Email','email'],];
        this.requiredFields = ['name','email','status','grade','tutor',];


        this.schemaName = 'enrollment';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'teachforlife';
        this.indexFields = ['name', ];
    }
}
