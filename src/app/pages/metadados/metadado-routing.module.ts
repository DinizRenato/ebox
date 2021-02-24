import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MetadadosFormComponent } from "./metadados-form/metadados-form.component";

const routes: Routes = [
    { path: 'new', component: MetadadosFormComponent },
    { path: ':id/edit', component: MetadadosFormComponent },
    { path: '', redirectTo: 'new', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MetadadoRoutingModule { }
