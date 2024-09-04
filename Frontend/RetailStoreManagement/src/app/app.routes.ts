import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { GetproductbyidComponent } from './getproductbyid/getproductbyid.component';

export const routes: Routes = [
    {
        path:'home', component:HomeComponent
    },
    {
        path:'addproduct', component:AddproductComponent
    },
    {
        path:'getproducts', component:GetproductsComponent
    },
    {
        path:'getproductbyid', component:GetproductbyidComponent
    },
    {
        path:'updateproduct', component:UpdateproductComponent
    },
    {
        path:'deleteproduct', component:DeleteproductComponent
    },
    {
        path:'**', component:ErrorcompComponent
    }

];
