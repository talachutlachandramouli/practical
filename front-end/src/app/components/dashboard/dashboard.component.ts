import { Component, OnInit } from '@angular/core';
import { DataapiService } from 'src/app/services/dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any;

  constructor(private dataapi: DataapiService,private route:Router) { }

  ngOnInit(): void {

      this.dataapi.get_products().subscribe((response)=>{
         this.products=response;
        console.log(response)
      });
  }

  add_to_cart(s){
    console.log(s)
    this.dataapi.add_to_cart(s).subscribe();
  }


}
