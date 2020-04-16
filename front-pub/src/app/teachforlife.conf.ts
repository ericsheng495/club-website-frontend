
import { Routes } from '@angular/router';

import { TeachforlifeComponent } from './teachforlife/teachforlife.component';

//Import routing paths
import { tutorRoutingPath, enrollmentRoutingPath,  } from './teachforlife/teachforlife-routing.path';

export const TeachforlifeRoutes: Routes = [
  { path: 'teachforlife',
    component: TeachforlifeComponent,
    children: [
      {path: '',  redirectTo: 'tutor', pathMatch: 'full'},

      { path: 'tutor',
        children: tutorRoutingPath,
        data: {mraLevel: 1, item: 'tutor'}
      },
      { path: 'enrollment',
        children: enrollmentRoutingPath,
        data: {mraLevel: 1, item: 'enrollment'}
      },
    ]
  }
];

export const teachforlife_server_root_uri: string = '/api/teachforlife';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Apr 10 2020 12:18:17 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { TeachforlifeComponent } from './teachforlife/teachforlife.component';

//Import routing paths
import { tutorRoutingPath, enrollmentRoutingPath,  } from './teachforlife/teachforlife-routing.path';

export const TeachforlifeRoutes: Routes = [
  { path: 'teachforlife',
    component: TeachforlifeComponent,
    children: [
      {path: '',  redirectTo: 'tutor', pathMatch: 'full'},

      { path: 'tutor',
        children: tutorRoutingPath,
        data: {mraLevel: 1, item: 'tutor'}
      },
      { path: 'enrollment',
        children: enrollmentRoutingPath,
        data: {mraLevel: 1, item: 'enrollment'}
      },
    ]
  }
];

export const teachforlife_server_root_uri: string = '/api/teachforlife';
**** End of recent updates.<<<*/
