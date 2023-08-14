import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductLists } from '../shared/services/product-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@ViewChild('myForm')  productLists : any;

  constructor(private httpServe : ProductLists) {
    
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.productLists.value);
    this.httpServe.addProductsList(this.productLists.value).subscribe((data : any)=>{
      console.log(data);
    })
  }

}
