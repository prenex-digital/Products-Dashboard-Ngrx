import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './components/home/dashboard.component';


const routes: Route[] = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: ':id',
        component: DashboardComponent
    }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }