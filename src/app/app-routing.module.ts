import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule) // esta es la forma que se utiliza para la carga perezosa (LazyLoading)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule) // esta es la forma que se utiliza para la carga perezosa (LazyLoading)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
