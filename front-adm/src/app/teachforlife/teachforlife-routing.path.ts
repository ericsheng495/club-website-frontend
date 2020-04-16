// Import components for each schema

import { TutorListComponent } from './tutor/tutor-list/tutor-list.component';
import { TutorDetailComponent } from './tutor/tutor-detail/tutor-detail.component';

import { TutorEditComponent } from './tutor/tutor-edit/tutor-edit.component';


import { EnrollmentListComponent } from './enrollment/enrollment-list/enrollment-list.component';
import { EnrollmentDetailComponent } from './enrollment/enrollment-detail/enrollment-detail.component';

import { EnrollmentEditComponent } from './enrollment/enrollment-edit/enrollment-edit.component';
import { EnrollmentListSubComponent } from './enrollment/enrollment-list/enrollment-list-sub.component';


import { AuthGuard } from '@hicoder/angular-auth';


const enrollmentSubPath = [
    {path: 'list', component: EnrollmentListSubComponent}
];


const tutorDetailPath = [

    {path: 'enrollment', children: enrollmentSubPath,
        data: {'mraLevel': 2, 'item': 'enrollment'}},
];


export const tutorRoutingPath = [
    {path: 'list', component: TutorListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: TutorDetailComponent, children: tutorDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: TutorEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: TutorEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const enrollmentRoutingPath = [
    {path: 'list', component: EnrollmentListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: EnrollmentDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EnrollmentEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: EnrollmentEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

