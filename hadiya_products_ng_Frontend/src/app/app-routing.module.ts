import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddUpdateFormComponent } from './products/add-update-form/add-update-form.component';
import { AdminPanelComponent } from './products/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent, pathMatch: 'full' },
  { path: 'form', component: AddUpdateFormComponent },
  { path: 'form/:id', component: AddUpdateFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
