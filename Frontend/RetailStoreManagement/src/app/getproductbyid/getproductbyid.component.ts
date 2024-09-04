import { Component } from '@angular/core';
import { ApiservService } from '../getserv.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getproductbyid',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add FormsModule to imports
  templateUrl: './getproductbyid.component.html',
  styleUrls: ['./getproductbyid.component.css']
})
export class GetproductbyidComponent {
  productId: string = '';  // Initially, it's a string since it's bound to the input
  product: any;

  constructor(private apiService: ApiservService) {}

  fetchProductById(): void {
    const productIdAsNumber: number = Number(this.productId); // Convert the string to a number
    this.apiService.getProductById(productIdAsNumber).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.error('Error fetching product', error);
      }
    );
  }
}
