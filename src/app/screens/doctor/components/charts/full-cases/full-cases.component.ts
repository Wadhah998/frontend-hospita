import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels; // add this
  color: any[]; // add this
};

@Component({
  selector: 'app-full-cases',
  templateUrl: './full-cases.component.html',
  styleUrls: ['./full-cases.component.scss'],
})
export class FullCasesComponent  implements OnInit {
  nmalade:number
  malade:number
  //@ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  ngOnInit() {
   this.nmalade=Number(localStorage.getItem("nmaladie"))
   console.log(this.nmalade)
   this.malade=Number(localStorage.getItem("maladie"))
    this.chartOptions = {
      series: [this.nmalade, this.malade],
      chart: {
        type: 'pie',
        height: 85,
        //width: '280px',
      },
      labels: ['الحالات الموكدة', 'الحالات المنفية'],
      colors: ['#FFD950', '#4791FF'], // add this part to modify colours
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 85,
            },
            legend: {
              position: 'right',
              horizontalAlign: 'center',
              verticalAlign: 'middle',
              fontSize: '14px',
            },
          },
        },
        {
          breakpoint: 320,
          options: {
            chart: {
              height: 85,
            },
          },
        },
      ],
      legend: {
        /* position: 'bottom',
        itemMargin: {
           horizontal: 5,
          vertical: 30,
        } */
        position: 'right',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '14px',

        /*  itemMargin: {
          horizontal: 5,
          vertical: 3,
        }, */
      },
      /*  dataLabels: { // add this part to remove %
        enabled: true,
        formatter(value: any, opts: any): any {
          return opts.w.config.series[opts.seriesIndex];
        },
      }*/
      dataLabels: {
        enabled: false,
      },
    };
  localStorage.removeItem("maladie")
  localStorage.removeItem("nmaladie")
  }
}
