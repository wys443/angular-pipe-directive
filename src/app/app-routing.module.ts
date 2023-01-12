import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Finished/components/home/home.component';
import { StarterPageComponent } from './Test/starter-page/starter-page.component';
import { TestPageComponent } from './Test/test-page/test-page.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "test", component: TestPageComponent },
  { path: "starter", component: StarterPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
