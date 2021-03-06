import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';

//Import routing paths
import { mfileRoutingPath, mfilegroupRoutingPath,  } from './files/files-routing.path';

export const FilesRoutes: Routes = [
  { path: 'files',
    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: 'mfile',
        children: mfileRoutingPath,
        data: {mraLevel: 1, item: 'mfile'}
      },
      { path: 'mfilegroup',
        children: mfilegroupRoutingPath,
        data: {mraLevel: 1, item: 'mfilegroup'}
      },
    ]
  }
];

export const files_server_root_uri: string = '/api/files';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Apr 10 2020 12:17:39 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';

//Import routing paths
import { mfileRoutingPath, mfilegroupRoutingPath,  } from './files/files-routing.path';

export const FilesRoutes: Routes = [
  { path: 'files',
    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: 'mfile',
        children: mfileRoutingPath,
        data: {mraLevel: 1, item: 'mfile'}
      },
      { path: 'mfilegroup',
        children: mfilegroupRoutingPath,
        data: {mraLevel: 1, item: 'mfilegroup'}
      },
    ]
  }
];

export const files_server_root_uri: string = '/api/files';
**** End of recent updates.<<<*/
