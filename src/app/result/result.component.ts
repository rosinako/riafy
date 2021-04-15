import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  arr_stocks: any;
  result: any={};

  constructor(private stocks:StockService,
    private route:ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      if(params){
        this.getData(params.stockId)
      }
  })
  }

  ngOnInit(): void {
  }

getData(id:String){
  this.stocks.getStock().subscribe((res:any)=>{
    this.arr_stocks=res;
    this.result = this.arr_stocks.filter((s:any) => s._id===id)[0];
    console.log(this.result);
  },err=>{
    console.log("err---->",err);
  })



}

}
