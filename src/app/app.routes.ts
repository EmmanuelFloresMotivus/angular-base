import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { DragonballPagesComponent } from './pages/dragonball-pages/dragonball-pages.component';
import { DragonballSuperPagesComponent } from './pages/dragonball-super-pages/dragonball-super-pages.component';

export const routes: Routes = [
  {path:'',
    component: CounterPageComponent
  },
  {
    path:'hero',
    component: HeroPageComponent
  },
  {
    path:'dragonball',
    component: DragonballPagesComponent
  },
  {
    path:'dragonball-super',
    component: DragonballSuperPagesComponent
  },
  {
    path:'**',
    redirectTo:''

  }
];
