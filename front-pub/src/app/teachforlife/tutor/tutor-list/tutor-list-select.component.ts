import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TutorListComponent } from './tutor-list.component';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-tutor-list-select',
  templateUrl: './tutor-list-select.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListSelectComponent extends TutorListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public tutorService: TutorService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(tutorService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
