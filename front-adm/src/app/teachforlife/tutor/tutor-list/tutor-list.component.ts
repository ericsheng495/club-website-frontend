import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TutorComponent, ViewType } from '../tutor.component';
import { TutorService } from '../tutor.service';



  
@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent extends TutorComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
      
      public tutorService: TutorService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                tutorService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('name');
          this.stringFields.push('introduction');
          this.stringFields.push('photo');
          this.stringFields.push('specificSubjects');







          this.textareaFields = ['introduction', 'specificSubjects', ];


          this.listViewFilter = 'grid';

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
    return new TutorListComponent(null, null, null, null, null);
  }
}

