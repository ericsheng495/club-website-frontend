import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from '@hicoder/angular-auth';

import { AUTHENTICATION_AUTH_PAGE_ROOT_URI, AUTHENTICATION_SERVER_ROOT_URI, 
  AUTHENTICATION_INTERFACES, AUTHENTICATION_DROPDOWN_ITEMS, AUTHENTICATION_LOGIN_PIPELINE } from '@hicoder/angular-auth';
import { authentication_page_root_uri, authentication_server_root_uri, 
  authentication_interfaces, authentication_dropdown_items, authentication_login_pipeline } from './auth.conf';
import { FILE_UPLOAD_URI, FILE_DOWNLOAD_URI } from '@hicoder/angular-file';
import { file_upload_uri, file_download_uri } from './file-upload.config';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';

import { PublicinfoModule } from './publicinfo/publicinfo.module';
import { TeachforlifeModule } from './teachforlife/teachforlife.module';
import { Teach4lifeComponent } from './teach4life/teach4life.component';

import { RouteReuseStrategy } from '@angular/router';
import { AppRouteReuseStrategy } from './app-routing-reuse';
import { EnrollComponent } from './teach4life/enroll/enroll.component';
import { SignUpComponent } from './teach4life/enroll/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    AboutComponent,
    MembersComponent,
    Teach4lifeComponent,
    EnrollComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    AuthenticationModule,
    PublicinfoModule,
    TeachforlifeModule
  ],
  providers: [
    { provide: AUTHENTICATION_AUTH_PAGE_ROOT_URI, useValue: authentication_page_root_uri },
    { provide: AUTHENTICATION_SERVER_ROOT_URI, useValue: authentication_server_root_uri },
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: AUTHENTICATION_DROPDOWN_ITEMS, useValue: authentication_dropdown_items },
    { provide: AUTHENTICATION_LOGIN_PIPELINE, useValue: authentication_login_pipeline },
    { provide: FILE_UPLOAD_URI, useValue: file_upload_uri },
    { provide: FILE_DOWNLOAD_URI, useValue: file_download_uri },
    { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
