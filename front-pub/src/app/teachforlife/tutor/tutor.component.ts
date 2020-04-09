import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { TutorService } from './tutor.service';

const itemCamelName = 'tutors';

export { ViewType };




export class TutorComponent extends MddsBaseComponent {



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
        this.requiredFields = ['name','introduction','photo','specificSubjects','grade','email','acceptGrade','availableTime',];


        this.schemaName = 'tutor';
        
        this.modulePath = 'teachforlife';
        this.indexFields = ['name', ];
    }
}
