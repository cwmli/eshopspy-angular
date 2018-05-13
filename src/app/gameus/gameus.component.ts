import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { USCart } from '../uscart';
import { ExchangeCart } from '../exchangecart';
import { EshopService } from '../eshop.service';
import { element } from 'protractor';

@Component({
  selector: 'app-gameus',
  templateUrl: './gameus.component.html',
  styleUrls: ['./gameus.component.css']
})
export class GameusComponent implements OnInit {

  private exchange: ExchangeCart;
  
  filterSale = false;
  paginationOffset = 0;
  uscarts: USCart[];
  ca_sale_prices = {}
  nsuids: string[];

  loading: boolean;

  constructor(private eshopService: EshopService,
              private location: Location,
              private route: ActivatedRoute) { 
    this.uscarts = [];
  }

  ngOnInit() {
    this.paginationOffset = +this.route.snapshot.queryParamMap.get("offset");
    this.filterSale = this.route.snapshot.queryParamMap.get("sale") == "true";
    this.getUSCarts(this.paginationOffset.toString());
    this.eshopService.getExchangeRates('USD')
    .subscribe(data => {
       this.exchange = data.body;
     });
  }

  paginateNext() {
    this.paginationOffset += 50;
    this.getUSCarts(this.paginationOffset.toString());
  }

  paginateBack() {
    this.paginationOffset -= 50;
    this.getUSCarts(this.paginationOffset.toString());
  }

  validateDate(dateString: string) {
    let pickedDate = new Date(Date.parse(dateString));
    return pickedDate <= new Date();
  }

  convertRate(base: string, target: string, value: number) {
    return (this.exchange.rates[target] * value).toFixed(2);
  }

  getUSCarts(offset: string): void {
    this.uscarts = [];
    this.nsuids = [];
    this.loading = true;
    this.eshopService.getUSCarts('50', offset, this.filterSale).subscribe(data => {
      this.loading = false;

      var groupIndex = 0;
      data['cartsArray'].forEach(element => {
        var cart = new USCart(
          element.title,
          element.id,
          element.nsuid,
          element.front_box_art,
          element.release_date,
          element.slug,
          element.usd_price,
          element.cad_price,
          element.free_to_start === "true",
          element.number_of_players
        );

        this.nsuids.push(cart.nsuid);

        if (element.sale_price) {
          cart.sale_price = element.sale_price;
        }

        this.uscarts.push(cart);
      });
    },
    error => console.log(error),
    () => {
      this.eshopService.getCartPrice('CA', offset, this.nsuids).subscribe(data => {
        data['cartsPrices'].forEach(element => {
          this.ca_sale_prices[element.title] = { sale: element.price, reg: element.reg_price };
        });
      });   
    });
  }
}
