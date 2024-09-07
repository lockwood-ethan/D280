import { Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';

export const routes: Routes = [
    { path: 'world', component: WorldComponent },
    { path: '', redirectTo: '/world', pathMatch:'full'}
];
