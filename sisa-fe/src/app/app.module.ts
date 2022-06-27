/* Components */
import { AppComponent } from './app.component';

/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { TranslateComponent } from './components/translation/translate/translate.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { LadningComponent } from './components/ladning/ladning.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    TranslateComponent,
    LandingComponent,
    LadningComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
