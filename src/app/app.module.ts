import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './component/heatmap/heatmap.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent,
    SidebarComponent,
    AdminDashboardComponent,
    AnalyticsComponent,
    ReservationComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    ChartsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
