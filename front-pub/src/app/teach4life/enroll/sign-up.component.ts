import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TutorService } from '../../teachforlife/tutor/tutor.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public tutorName: string;
  constructor(
    public route: ActivatedRoute,
    private tutorService: TutorService,
  ) { }

  async ngOnInit() {
    const tutorID = this.route.snapshot.queryParamMap.get("tutor");
    const tutorDetail = await this.tutorService.getDetail(tutorID).toPromise();
    this.tutorName = tutorDetail.name;
  }

}
