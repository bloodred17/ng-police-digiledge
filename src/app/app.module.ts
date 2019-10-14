import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderBoxComponent } from './render-box/render-box.component';

import { ScrollEventModule } from 'ngx-scroll-event';
import { AddThiefComponent } from './add-thief/add-thief.component';

import { FormsModule } from '@angular/forms';
import { RemoveThievesComponent } from './remove-thieves/remove-thieves.component';
import { ThiefDetailsComponent } from './render-box/thief-details/thief-details.component';
import { GendertostringPipe } from './pipes/gendertostring.pipe';
import { ConvictiontostringPipe } from './pipes/convictiontostring.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RenderBoxComponent,
    AddThiefComponent,
    RemoveThievesComponent,
    ThiefDetailsComponent,
    GendertostringPipe,
    ConvictiontostringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollEventModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
