import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MpubaccessBaseService } from './mpubaccess.base.service';
import { Access_SERVER_ROOT_URI } from '../access.tokens';

@Injectable()
export class MpubaccessService extends MpubaccessBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Access_SERVER_ROOT_URI) private accessServerRootUri: string) {
        super(http, accessServerRootUri);
    }
    ngOnDestroy() { }
}
