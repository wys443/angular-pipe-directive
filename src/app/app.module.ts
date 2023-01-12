import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//add this
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquarePipe } from './Finished/shared/square.pipe';
import { HighlightDirective } from './Finished/shared/highlight.directive';
import { HomeComponent } from './Finished/components/home/home.component';
import { TestPageComponent } from './Test/test-page/test-page.component';
import { PipePipe } from './Test/pipe.pipe';
import { StarterPageComponent } from './Test/starter-page/starter-page.component';
import { TestDirectiveDirective } from './Test/test-directive.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    HighlightDirective,
    HomeComponent,
    TestPageComponent,
    PipePipe,
    StarterPageComponent,
    TestDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //add this
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
