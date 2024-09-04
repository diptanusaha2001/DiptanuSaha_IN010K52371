import { Component } from '@angular/core';
import { ApiservService } from '../getserv.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {
  productId: number = 0; // Initialize with a default value

  constructor(private apiService: ApiservService, private router: Router) {}

  deleteProduct(): void {
    if (this.productId) {
      this.apiService.deleteProduct(this.productId).subscribe(
        () => {
          // Refresh the product list
          this.router.navigate(['/get-product']);
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
