import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { DataapiService } from 'src/app/services/dataapi.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  guardian_value:true;
  show = false;
  constructor(private dataapi: DataapiService,private toastr:ToastrManager,private router:Router) { }
  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  ngOnInit() {
  }


  onSubmit(form:NgForm){

    console.log(form.value);


       this.dataapi.add_user(form.value).subscribe();

  
  
    this.toastr.successToastr('Successfully signed up.', 'Success!');
    // window.setTimeout(function(){location.reload()},2000)
    // this.router.navigate(['/login'])

    
    

  }
  


}
