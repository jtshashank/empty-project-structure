import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdministrationComponent } from './views/administration/administration.component';
import { ReportingAnalyticsComponent } from './views/reporting-analytics/reporting-analytics.component';
import { MasterDataComponent } from './views/master-data/master-data.component';
import { LookupsComponent } from './views/reporting-analytics/lookups/lookups.component';
import { ReportsDashboardComponent } from './views/reporting-analytics/reports-dashboard/reports-dashboard.component';
import { UsersComponent } from './views/administration/user-access/users/users.component';
import { RolesComponent } from './views/administration/user-access/roles/roles.component';
import { AccessComponent } from './views/administration/user-access/access/access.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdministrationComponent,
    ReportingAnalyticsComponent,
    MasterDataComponent,
    LookupsComponent,
    ReportsDashboardComponent,
    UsersComponent,
    RolesComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
