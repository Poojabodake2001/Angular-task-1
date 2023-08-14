import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
                            
@Injectable({
    providedIn : "root"
})

export class ProductLists{

    baseUrl = `https://angular-task1-b4002-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`;
    constructor(private http : HttpClient){}
    
    addProductsList(res : any){
        return this.http.post(this.baseUrl, res)
    }
    getProductsList(){
        return this.http.get(this.baseUrl, {
            headers : new HttpHeaders({
                'name' : 'pooja'
            }),
            observe : 'body'
        }).pipe(map((jsonData : any) =>{
            let arr = [];
            for(let data in jsonData ){
                arr.push({...jsonData[data], id : data})
            }
            return arr;
        }))
    }
}