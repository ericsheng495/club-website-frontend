import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import { eventRoutingPath, articleRoutingPath, faqRoutingPath, generalinfoRoutingPath, keynoteRoutingPath, pageRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo',
    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: "event",
        children: eventRoutingPath,
        data: {"mraLevel": 1, "item": "event"}
      },
      { path: "article",
        children: articleRoutingPath,
        data: {"mraLevel": 1, "item": "article"}
      },
      { path: "faq",
        children: faqRoutingPath,
        data: {"mraLevel": 1, "item": "faq"}
      },
      { path: "generalinfo",
        children: generalinfoRoutingPath,
        data: {"mraLevel": 1, "item": "generalinfo"}
      },
      { path: "keynote",
        children: keynoteRoutingPath,
        data: {"mraLevel": 1, "item": "keynote"}
      },
      { path: "page",
        children: pageRoutingPath,
        data: {"mraLevel": 1, "item": "page"}
      },
    ]
  }
];

export const publicinfo_server_root_uri:string = "/api/publicinfo";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Apr 10 2020 12:17:40 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import { eventRoutingPath, articleRoutingPath, faqRoutingPath, generalinfoRoutingPath, keynoteRoutingPath, pageRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo',
    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: 'event',
        children: eventRoutingPath,
        data: {mraLevel: 1, item: 'event'}
      },
      { path: 'article',
        children: articleRoutingPath,
        data: {mraLevel: 1, item: 'article'}
      },
      { path: 'faq',
        children: faqRoutingPath,
        data: {mraLevel: 1, item: 'faq'}
      },
      { path: 'generalinfo',
        children: generalinfoRoutingPath,
        data: {mraLevel: 1, item: 'generalinfo'}
      },
      { path: 'keynote',
        children: keynoteRoutingPath,
        data: {mraLevel: 1, item: 'keynote'}
      },
      { path: 'page',
        children: pageRoutingPath,
        data: {mraLevel: 1, item: 'page'}
      },
    ]
  }
];

export const publicinfo_server_root_uri: string = '/api/publicinfo';
**** End of recent updates.<<<*/
