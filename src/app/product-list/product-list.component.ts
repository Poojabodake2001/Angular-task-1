import { Component, OnInit } from '@angular/core';
import { ProductLists } from '../shared/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  getProductList : any[] = [];
  qtyArr :any[]=[];
  tableProductsArr :any[] =[];
  totalAmt = 0;
  constructor(private http : ProductLists){
    

  }

  ngOnInit(): void {
    this.getLists();
  }
  getLists(){
    this.http.getProductsList().subscribe((res : any)=>{
      this.getProductList = res;
      console.log(this.getProductList);
      this.qtyArr = Array(this.getProductList.length).fill(1)
    })
   
  }
  decrement(i:any){
    if(this.qtyArr[i] > 1){
      this.qtyArr[i]--;
    }
  }
  increment(i:any){
    this.qtyArr[i]++
  }
  addToTable(list:any, total:number, Total:number){
    console.log(list);
    this.tableProductsArr.push({...list, total, Total})
    console.log(this.tableProductsArr);
    this.totalAmt= this.totalAmt + Total  
   }
   clearBag(){
    this.tableProductsArr = [];
    this.totalAmt=0;
   }
}
