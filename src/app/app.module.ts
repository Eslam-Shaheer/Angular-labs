import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './Components/Directive/highlight.directive';
import { RoundedDirective } from './Directives/rounded.directive';
import { CurrencyPipe } from './Pipes/currency.pipe';
import { SearchComponent } from './Components/search/search.component';
import { ProductsViewComponent } from './Components/ProductView/products-view/products-view.component';
import { CategorySearchComponent } from './Components/ProductView/category-search/category-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    HighlightDirective,
    RoundedDirective,
    CurrencyPipe,
    SearchComponent,
    ProductsViewComponent,
    CategorySearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
