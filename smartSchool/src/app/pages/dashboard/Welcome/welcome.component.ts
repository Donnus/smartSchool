import { Component, AfterViewInit } from '@angular/core';
import { Chart } from '@antv/g2';

const data = [
    { item: '事例一', count: 40, percent: 0.4 },
    { item: '事例二', count: 21, percent: 0.21 },
    { item: '事例三', count: 17, percent: 0.17 },
    { item: '事例四', count: 13, percent: 0.13 },
    { item: '事例五', count: 9, percent: 0.09 },
  ];

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent implements AfterViewInit
{
    data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ];

    ngAfterViewInit(): void {
    const chart = new Chart({
        container: 'c1',
        width: 500,
        height: 300,
        });

        chart.data(this.data);
        chart.interval().position('genre*sold');
        chart.render();   
    }
}