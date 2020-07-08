import { Component, OnInit } from '@angular/core';
import { DataapiService } from 'src/app/services/dataapi.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  get_cart_products: any;

  constructor(private dataapi: DataapiService) { }

  ngOnInit(): void {
    this.dataapi.get_from_cart().subscribe((response)=>{
      this.get_cart_products=response;
     console.log(response)
   });
  }

  delete_from_cart(id){
console.log(id);
this.dataapi.delete_from_cart({id}).subscribe();
  }

}
