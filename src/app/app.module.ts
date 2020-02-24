import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule }   from '@angular/common';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AppRoutingModule }        from './app-routing.module';
import { HeroesModule }            from './heroes/heroes.module';
import { AuthModule }              from './auth/auth.module';
import { MainbarComponent } from './mainbar/mainbar.component';


//import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisListComponent }       from './crisis-center/crisis-list/crisis-list.component';
import { CrisisCenterComponent }     from './crisis-center/crisis-center/crisis-center.component';
import { CrisisDetailComponent }     from './crisis-center/crisis-detail/crisis-detail.component';
//import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';
import { SidebarComponent } from './crisis-center/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
    MainbarComponent,

    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisDetailComponent,
    SidebarComponent
  ],
  exports: [
    MainbarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
