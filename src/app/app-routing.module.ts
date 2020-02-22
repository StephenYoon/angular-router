import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent }  from './compose-message/compose-message.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { MainbarComponent } from './mainbar/mainbar.component';

import { AuthGuard }                          from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


import { CanDeactivateGuard }             from '../app/can-deactivate.guard';
import { CrisisDetailResolverService }    from './crisis-center/crisis-detail-resolver.service';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisListComponent }       from './crisis-center/crisis-list/crisis-list.component';
import { CrisisCenterComponent }     from './crisis-center/crisis-center/crisis-center.component';
import { CrisisDetailComponent }     from './crisis-center/crisis-detail/crisis-detail.component';
import { SidebarComponent } from './crisis-center/sidebar/sidebar.component';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'mainbar',
    component: MainbarComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'sidebar',
        component: SidebarComponent,
        outlet: 'popup2'
      },
      
      {
        path: 'foo',
        component: SidebarComponent,
      },
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
    //loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    //data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
