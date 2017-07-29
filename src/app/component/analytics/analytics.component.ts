import { AnalyticsService } from './../../service/analytics.service';
import { ChartsModule } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [AnalyticsService]
})
export class AnalyticsComponent implements OnInit {
  public loading = true;
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 NN',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      // yAxes: [{
      //   gridLines: {
      //     display: false
      //   }
      // }]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(56, 165, 196,0)',
      borderColor: 'rgba(56, 165, 196,1)',
      pointBackgroundColor: 'rgba(56, 165, 196,1)',
      pointBorderColor: 'rgba(56, 165, 196,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(56, 165, 196,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(36, 44, 60,0)',
      borderColor: 'rgba(36, 44, 60,1)',
      pointBackgroundColor: 'rgba(36, 44, 60,1)',
      pointBorderColor: 'rgba(36, 44, 60,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(36, 44, 60,1)'
    },

  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  constructor(private service: AnalyticsService) {
    this.getPeopleCountByDay('Monday');

  }

  ngOnInit() {
  }

  getPeopleCountByDay(day) {
    this.loading = true;
    this.service.getPeopleCountFromRoom()
      .subscribe((response) => {
        const res = response.json();

        res.rooms.forEach(room => {
          room.data = room.data
            .filter((o) => {
              return o.day === day;
            })
            .map(function (e) {
              return e.person_count;
            });


          this.lineChartData.push({
            label: room.room_name,
            data: room.data
          });

          this.loading = false;
        });


      });
  }
}
