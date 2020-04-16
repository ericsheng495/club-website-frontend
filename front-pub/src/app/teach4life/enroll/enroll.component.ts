import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  Directive,
  EventEmitter,
} from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { Injector } from "@angular/core";

import { EnrollmentEditComponent } from "../../teachforlife/enrollment/enrollment-edit/enrollment-edit.component";
import { EnrollmentService } from "../../teachforlife/enrollment/enrollment.service";
import { ComponentFactoryResolver } from "@angular/core";

@Component({
  selector: "app-enroll-embedded",
  templateUrl:
    "../../teachforlife/enrollment/enrollment-edit/enrollment-edit.component.html",
  styleUrls: [
    "../../teachforlife/enrollment/enrollment-edit/enrollment-edit.component.css",
  ],
})
export class EnrollComponent extends EnrollmentEditComponent implements OnInit {
  private tutorID: string;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public enrollmentService: EnrollmentService,
    public injector: Injector,
    public router: Router,
    public route: ActivatedRoute,
    public location: Location
  ) {
    super(
      componentFactoryResolver,
      enrollmentService,
      injector,
      router,
      route,
      location
    );

    this.embeddedView = true; // change to an embedded view so we can receive emit
    this.embedMode == "create";

    // now subscribe to the edit submit event
    this.done.subscribe((val: boolean) => {
      if (val) {
        this.router.navigate(["/teach4life"]);
      } else {
        this.location.back();
      }
    });
    this.hiddenFields.push("tutor");
  }

  ngOnInit() {
    super.ngOnInit();
    this.tutorID = this.route.snapshot.queryParamMap.get("tutor");
    this.detail["tutor"] = { _id: this.tutorID };
  }
}
