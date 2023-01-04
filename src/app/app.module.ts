import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//add this
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquarePipe } from './Finished/shared/square.pipe';
import { HighlightDirective } from './Finished/shared/highlight.directive';
import { HomeComponent } from './Finished/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    HighlightDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //add this
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
