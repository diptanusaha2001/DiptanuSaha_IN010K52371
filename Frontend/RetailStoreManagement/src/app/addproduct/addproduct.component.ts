import { Component } from '@angular/core';
import { ApiservService } from '../getserv.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product = {
    id: '',
    name: '',
    category: '',
    price: '',
    quantity: ''
  };

  constructor(private apiService: ApiservService, private router: Router) {}

  addProduct(): void {
    this.apiService.addProduct(this.product).subscribe(
      response => {
        alert('Product added successfully!');
        this.router.navigate(['/get-product']);
      },
      error => {
        console.error('Error adding product', error);
      }
    );
  }
}
