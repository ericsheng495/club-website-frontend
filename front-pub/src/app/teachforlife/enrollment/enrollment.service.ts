import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnrollmentBaseService } from './enrollment.base.service';
import { Teachforlife_SERVER_ROOT_URI } from '../teachforlife.tokens';

@Injectable()
export class EnrollmentService extends EnrollmentBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Teachforlife_SERVER_ROOT_URI) private teachforlifeServerRootUri: string) {
        super(http, teachforlifeServerRootUri);
    }
    ngOnDestroy() { }
}
