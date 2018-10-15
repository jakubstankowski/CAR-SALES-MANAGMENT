import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarAddComponent } from './car/car-add/car-add.component';
import { CarViewComponent } from './car/car-view/car-view.component';



const appRoutes: Routes = [

  {path:'', component: CarListComponent},
  {path: 'car', component: CarViewComponent},
  /*{path:'wep', component: WepComponent, canActivate:[AuthGuard]}*/
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarAddComponent,
    CarViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  entryComponents: [
    CarAddComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
