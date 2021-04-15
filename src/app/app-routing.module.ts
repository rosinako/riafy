import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';


export const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "result", component: ResultComponent },
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import {
//   Routes,
//   RouterModule,
// } from "@angular/router";

// const routes: Routes = [{
//   path: '',
//   children: [
//     {
//       path: 'home',
//       loadChildren: "src/app/components/pages/pages.module#PagesModule"
//     },
//     {
//       path: '',
//       redirectTo: 'home/home',
//       pathMatch: 'full',
//     }
//   ]
// }]



// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
