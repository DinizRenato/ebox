import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjetosFormComponent } from "./projetos-form/projetos-form.component";
import { ProjetosListComponent } from "./projetos-list/projetos-list.component";


const routes: Routes = [
    { path: 'new', component: ProjetosFormComponent },
    { path: ':id/edit', component: ProjetosFormComponent },
    { path: '', component: ProjetosListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjetosRouginModule { }
