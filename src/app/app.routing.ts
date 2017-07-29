import { ReservationComponent } from './component/reservation/reservation.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HeatmapComponent } from './component/heatmap/heatmap.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const AppRoutes: Routes = [
  {
    path: '', component: AdminDashboardComponent, children: [
      { path: 'heatmap', component: HeatmapComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'reservation', component: ReservationComponent }

    ]
  },
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
