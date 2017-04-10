import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
  imports: [
            BrowserModule, 
            FormsModule, 
            HttpModule,
            RouterModule.forRoot([
              { path: 'productos', component: ProductListComponent },
              { path: 'productos/:id', component: ProductDetailComponent },
              { path: 'welcome', component: WelcomeComponent },
              { path: '', redirectTo: 'welcome', pathMatch:'full' },
              { path: '**', redirectTo: 'welcome', pathMatch:'full' }
            ]/*, { useHash: true}*/)
            ],
  declarations: [
                AppComponent, 
                WelcomeComponent,
                ProductListComponent, 
                ProductDetailComponent,
                ProductFilterPipe, 
                StarComponent
                ],
  bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
