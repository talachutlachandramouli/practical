import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataapiService } from 'src/app/services/dataapi.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage ={message: true};
  userdata: any;
i:any;
  constructor(private dataapi: DataapiService,private route:Router,private toater:ToastrManager) { }

  ngOnInit() {
    this.dataapi.get_user().subscribe((responce)=>{
      this.userdata=responce;
      console.log(responce);
    })  
  }
  onSubmit(form:NgForm){

let i
    for(i=0;i<this.userdata.length;i++)
    if(form.value.username==this.userdata[i].email && form.value.password==this.userdata[i].password){
     this.route.navigate(['home'])
    }
    else{
this.toater.errorToastr('please sign-up','wrong user')
    }
    



      }

}
