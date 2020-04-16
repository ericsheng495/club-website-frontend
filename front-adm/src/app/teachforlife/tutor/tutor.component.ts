import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { TutorService } from './tutor.service';

const itemCamelName = 'tutors';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class TutorComponent extends MddsBaseComponent {


    @ViewChild('TeachforlifeModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public tutorService: TutorService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(tutorService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['introduction', 'Introduction']);this.briefFieldsInfo.push(['photo', 'Photo']);this.briefFieldsInfo.push(['specificSubjects', 'Tutoring Subjects']);



        this.emailFields = [['Email','email'],];
        this.requiredFields = ['name','grade','email','introduction','photo','acceptGrade','availableTime','specificSubjects',];


        this.schemaName = 'tutor';
        
        this.modulePath = 'teachforlife';
        this.indexFields = ['name', ];
    }
}
