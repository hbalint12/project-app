import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landingpage/landingpage.component'
import { SubscriptionFormComponent } from './subscription/subscription.component'
import { ProjectItemComponent } from './project-item/project-item.component'
import { ProjectItemListComponent } from './project-item-list/project-item-list.component'
import { DetailedProjectComponent } from './detailed-project/detailed-project.component'
import { DetailedIntroComponent } from './detailed-introduction/detailed-introduction.component'


const routes: Routes = [
  { path: 'detailedIntro', component: DetailedIntroComponent},
  { path: 'projectList', component: ProjectItemListComponent},
  { path: 'main', component: LandingPageComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: ':id', component: DetailedProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
