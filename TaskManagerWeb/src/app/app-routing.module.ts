import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

const appRoutes: Routes = [
    { path: '', component: TaskManagerComponent },    
    { path: '**', redirectTo: '' } // Default Routes and should be in the last position  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }