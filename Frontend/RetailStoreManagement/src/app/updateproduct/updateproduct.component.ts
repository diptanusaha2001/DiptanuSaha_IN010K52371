import { Component } from '@angular/core';
import { ApiservService } from '../getserv.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule here
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  productId: number = 0;
  product: any = {
    name: '',
    category: '',
    price: 0,
    quantity: 0
  };
  updatedProduct: any = {};

  constructor(private apiService: ApiservService, private router: Router) {}

  fetchProduct(): void {
    if (this.productId) {
      this.apiService.getProductById(this.productId).subscribe(
        (response) => {
          this.product = response;
          this.updatedProduct = { ...this.product }; // Populate updatedProduct with the fetched details
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  }

  updateProduct(): void {
    if (this.productId && this.updatedProduct) {
      this.apiService.updateProduct(this.productId, this.updatedProduct).subscribe(
        () => {
          alert('Product updated successfully!');
          this.router.navigate(['/get-product']); // Redirect to the GetProducts component to see the update
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}
