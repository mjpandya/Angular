import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MobileMenuComponentComponent } from './mobile-menu-component/mobile-menu-component.component';
import { PageHeaderComponentComponent } from './page-header-component/page-header-component.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { HomeSliderComponentComponent } from './home-slider-component/home-slider-component.component';
import { OffersComponentComponent } from './offers-component/offers-component.component';
import { SpecialProductsComponentComponent } from './special-products-component/special-products-component.component';
import { TopSellersComponentComponent } from './top-sellers-component/top-sellers-component.component';
import { TopBannerComponentComponent } from './top-banner-component/top-banner-component.component';
import { SpecialOffersComponentComponent } from './special-offers-component/special-offers-component.component';
import { DealOfTheWeekComponentComponent } from './deal-of-the-week-component/deal-of-the-week-component.component';
import { LatestNewsComponentComponent } from './latest-news-component/latest-news-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { BigOfferComponentComponent } from './big-offer-component/big-offer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponentComponent,
    PageHeaderComponentComponent,
    NavigationComponentComponent,
    HomeSliderComponentComponent,
    OffersComponentComponent,
    SpecialProductsComponentComponent,
    TopSellersComponentComponent,
    TopBannerComponentComponent,
    SpecialOffersComponentComponent,
    DealOfTheWeekComponentComponent,
    LatestNewsComponentComponent,
    FooterComponentComponent,
    BigOfferComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
