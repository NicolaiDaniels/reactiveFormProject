import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MainFormModule} from './components/main-form/main-form.module';
import {WINDOW_PROVIDERS} from './services/scroll.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MainFormModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})

export class AppModule { }
