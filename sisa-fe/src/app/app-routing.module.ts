import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/translation/translation.module').then(
        (m) => m.TranslationModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/landing/landing.module').then((m) => m.LandingModule),
  },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
