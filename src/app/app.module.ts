import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RandomImage } from './random-image.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpClientTestingModule, NgbModule, AppRoutingModule ],
  declarations: [ AppComponent, GalleryComponent ],
  bootstrap:    [ AppComponent ],
  exports:      [ AppComponent ],
  providers:    [RandomImage],
})
export class AppModule { }