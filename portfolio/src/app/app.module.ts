import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { PortfolioItemDetailComponent } from './portfolio-item-detail/portfolio-item-detail.component';

const appRoutes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'portfolioItemDetailTemplate', component: PortfolioItemDetailComponent },
  { path: '**',  redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioItemComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    PortfolioItemDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
