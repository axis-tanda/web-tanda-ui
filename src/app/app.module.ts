import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './component/heatmap/heatmap.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent,
    SidebarComponent,
    AdminDashboardComponent
  ],
  imports: [
    AppRouting,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
