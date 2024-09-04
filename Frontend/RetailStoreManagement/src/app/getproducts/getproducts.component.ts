import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../getserv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getproducts.component.html',
  styleUrl: './getproducts.component.css'
})
export class GetproductsComponent  implements OnInit{
 
  constructor(private myserv:ApiservService){}
 
  products:any=[]
  ngOnInit(){
 
    return  this.myserv.getAllProduct().subscribe(res=>{
      console.log(res)
        this.products=res;
    },err=>{})
   
  }
 
}
