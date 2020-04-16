import { Routes } from '@angular/router';

import { EmailingComponent } from './emailing/emailing.component';

//Import routing paths
import { emailtemplateRoutingPath, emailsettingsRoutingPath, emaillogRoutingPath,  } from './emailing/emailing-routing.path';

export const EmailingRoutes: Routes = [
  { path: 'emailing',
    component: EmailingComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: 'emailtemplate',
        children: emailtemplateRoutingPath,
        data: {mraLevel: 1, item: 'emailtemplate'}
      },
      { path: 'emailsettings',
        children: emailsettingsRoutingPath,
        data: {mraLevel: 1, item: 'emailsettings'}
      },
      { path: 'emaillog',
        children: emaillogRoutingPath,
        data: {mraLevel: 1, item: 'emaillog'}
      },
    ]
  }
];

export const emailing_server_root_uri: string = '/api/emailing';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Apr 10 2020 12:17:37 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { EmailingComponent } from './emailing/emailing.component';

//Import routing paths
import { emailtemplateRoutingPath, emailsettingsRoutingPath, emaillogRoutingPath,  } from './emailing/emailing-routing.path';

export const EmailingRoutes: Routes = [
  { path: 'emailing',
    component: EmailingComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: 'emailtemplate',
        children: emailtemplateRoutingPath,
        data: {mraLevel: 1, item: 'emailtemplate'}
      },
      { path: 'emailsettings',
        children: emailsettingsRoutingPath,
        data: {mraLevel: 1, item: 'emailsettings'}
      },
      { path: 'emaillog',
        children: emaillogRoutingPath,
        data: {mraLevel: 1, item: 'emaillog'}
      },
    ]
  }
];

export const emailing_server_root_uri: string = '/api/emailing';
**** End of recent updates.<<<*/
