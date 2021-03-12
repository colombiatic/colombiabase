import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PlataformasComponent } from './components/plataformas/plataformas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PromosComponent } from './components/promos/promos.component';
import { FeaturingComponent } from './components/featuring/featuring.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ServiciosComponent,
    PlataformasComponent,
    ContactoComponent,
    PromosComponent,
    FeaturingComponent,
    SubscribeComponent,
    SectionHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
