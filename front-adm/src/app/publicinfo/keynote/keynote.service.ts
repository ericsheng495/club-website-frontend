import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeynoteBaseService } from './keynote.base.service';
import { Publicinfo_SERVER_ROOT_URI } from '../publicinfo.tokens';

@Injectable()
export class KeynoteService extends KeynoteBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Publicinfo_SERVER_ROOT_URI) private publicinfoServerRootUri: string) {
        super(http, publicinfoServerRootUri);
    }
    ngOnDestroy() { }
}
