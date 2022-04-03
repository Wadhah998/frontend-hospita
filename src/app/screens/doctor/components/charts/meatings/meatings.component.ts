import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-meatings',
  templateUrl: './meatings.component.html',
  styleUrls: ['./meatings.component.scss'],
})
export class MeatingsComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any;
  constructor() {
    this.chartOptions = {
      /* series: [
        {
          name: "series1",
          data: [31, 40, 51]
        },
       
      ], */

      series: [
        /* {
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
        name: 'Page Views',
        data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    }, */
        {
          name: 'Total Visits',
          data: [36, 42, 60, 82, 13, 18, 29, 37, 36, 51, 32, 35],
        },
      ],
      chart: {
        height: 80,
        width: 200,
        type: 'area',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      colors: ['#2CD889'],
      stroke: {
        curve: 'smooth',
        width: 3,
        //curve: 'straight',
        dashArray: 5,
        /*  colors:'red', */
      },
      /* fill: {
        //type: 'solid',
        opacity: 0.3
      }, */
      grid: {
        show: false,
      },

      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },

      /* tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      } */
      tooltip: {
        enabled: false,
      },
    };
  }

  ngOnInit(): void {}
}
