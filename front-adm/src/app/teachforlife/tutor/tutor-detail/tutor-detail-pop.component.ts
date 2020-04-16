import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TutorDetailComponent } from './tutor-detail.component';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-tutor-detail-pop',
  templateUrl: './tutor-detail-pop.component.html',
  styleUrls: ['./tutor-detail.component.css']
})
export class TutorDetailPopComponent extends TutorDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        public tutorService: TutorService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(tutorService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }

    ngAfterViewInit() {
    }
}
