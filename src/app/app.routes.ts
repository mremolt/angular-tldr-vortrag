import { Routes } from '@angular/router';

import { V14Component } from './versions/v14/v14.component';
import { V15Component } from './versions/v15/v15.component';
import { V16Component } from './versions/v16/v16.component';
import { V17Component } from './versions/v17/v17.component';
import { V18Component } from './versions/v18/v18.component';
import { StandaloneComponent } from './special/standalone/standalone.component';
import { SignalsComponent } from './special/signals/signals.component';
import { OutlookComponent } from './special/outlook/outlook.component';

export const routes: Routes = [
  { path: 'v14', component: V14Component, title: 'Neuigkeiten in Angular V14' },
  { path: 'v15', component: V15Component, title: 'Neuigkeiten in Angular V15' },
  { path: 'v16', component: V16Component, title: 'Neuigkeiten in Angular V16' },
  { path: 'v17', component: V17Component, title: 'Neuigkeiten in Angular V17' },
  { path: 'v18', component: V18Component, title: 'Neuigkeiten in Angular V18' },
  { path: 'standalone', component: StandaloneComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'outlook', component: OutlookComponent },
];
