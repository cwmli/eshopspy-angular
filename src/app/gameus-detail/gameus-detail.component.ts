import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { USCart } from '../uscart'; 
import { EshopService } from '../eshop.service';


@Component({
  selector: 'app-gameus-detail',
  templateUrl: './gameus-detail.component.html',
  styleUrls: ['./gameus-detail.component.css']
})
export class GameusDetailComponent implements OnInit {
  
  pageOffset;
  pageSale;

  cartTitle: string;
  pricing: Number[];
  pricingDates: string[];
  saleDate: Date;
  pricingData = false;
  
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartColors: Array<any> = [
    { // coral
      backgroundColor: 'rgba(255,127,80,0.2)',
      borderColor: 'rgba(255,127,80,1)',
      pointBackgroundColor: 'rgba(255,127,80,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,127,80,0.8)'
    }
  ];
  lineChartLegend:boolean = false;
  lineChartType:string = 'line';

  constructor(  private route: ActivatedRoute,
    private eshopService: EshopService,
    private location: Location) { }

  ngOnInit() {
    this.getCart();
    
  }

  getCart(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageOffset = this.route.snapshot.queryParamMap.get("offset");
    this.pageSale = this.route.snapshot.queryParamMap.get("sale");
    this.eshopService.getHistoricalPricing(id)
      .subscribe(data => {
        this.cartTitle = data['title'];
        this.pricing = data['ca_historical_pricing'];
        this.pricingDates = data['ca_pricing_dates'];
        this.saleDate = data['last_sale_date'];

        var formattedDates = this.pricingDates.map(function(date) {
          return new Date(date).toLocaleDateString();
        });

        this.lineChartData = [{data: this.pricing, label: 'Price'}];
        this.lineChartLabels = formattedDates;
        this.pricingData = true;
      });
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
