import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservService {
  private baseUrl = 'http://localhost:5050';

  constructor(private http: HttpClient) {}

  // Fetch all products
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getProd`);
  }

  // Fetch product by ID
  getProductById(productId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getProd/${productId}`);
  }

  // Add a new product
  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addProd`, product);
  }

  // Update an existing product
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateProd`, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteProd/${id}`);
  }
}
