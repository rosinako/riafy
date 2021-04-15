import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  selectedStock:any;
arr_stocks:any=[]
  constructor(private router:Router,
    private stocks:StockService) { }

  ngOnInit(): void {
    this.getStocks()
  }
  goPage(){
    this.router.navigate(["result"]);
  }


  getStocks(){
  this.stocks.getStock().subscribe((res:any)=>{
  this.arr_stocks=res;
},err=>{
  console.log("err---->",err);
})
  }
  onChange(event:any){
    const navigationExtras: NavigationExtras = {
      queryParams: {
          'stockId': event._id,
      },
  };
  this.router.navigate(['result'], navigationExtras);
  }
}
