import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit {
  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend  = true;
  public lineChartType  = 'line';

  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public capture() {
    const chart = document.getElementById('chart');
    const output = document.getElementById('output');
    const retoutput = this.takeHighResScreenshot(chart, output, 1 );
    console.log(retoutput);
  }
  takeHighResScreenshot(srcEl, destIMG, scaleFactor) {
    // Save original size of element
    const originalWidth = srcEl.offsetWidth;
    const originalHeight = srcEl.offsetHeight;
    // Force px size (no %, EMs, etc)
    srcEl.style.width = originalWidth + 'px';
    srcEl.style.height = originalHeight + 'px';
    // Create scaled canvas
    const scaledCanvas = document.createElement('canvas');
    // scaledCanvas.width = originalWidth * scaleFactor;
    // scaledCanvas.height = originalHeight * scaleFactor;
    scaledCanvas.width = 1980;
    scaledCanvas.height = 1080;
    // scaledCanvas.style.width = originalWidth + 'px';
    // scaledCanvas.style.height = originalHeight + 'px';
    scaledCanvas.style.width = 1980 + 'px';
    scaledCanvas.style.height = 1080 + 'px';
    const scaledContext = scaledCanvas.getContext('2d');
    scaledContext.scale(scaleFactor, scaleFactor);

    const output =  html2canvas(srcEl, { canvas: scaledCanvas })
      .then(function(canvas) {
        destIMG.src = canvas.toDataURL('image/png');
        // srcEl.style.display = 'none';
        return canvas.toDataURL('image/png');
      });
    return output;
  }

  constructor() { }

  ngOnInit() {
  }


}
