import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectItemComponent } from './project-item/project-item.component'
import { ProjectItemListComponent } from './project-item-list/project-item-list.component'
import { CustomDirective } from './custom.directive'
import { CategoryListPipe } from './category-list.pipe'
import { LandingPageComponent } from './landingpage/landingpage.component'
import { SubscriptionFormComponent } from './subscription/subscription.component'
import { DetailedProjectComponent } from './detailed-project/detailed-project.component'
import { DetailedIntroComponent } from './detailed-introduction/detailed-introduction.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProjectItemComponent,
    ProjectItemListComponent,
    CustomDirective,
    CategoryListPipe,
    LandingPageComponent,
    SubscriptionFormComponent,
    DetailedProjectComponent,
    DetailedIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    //LandingPageComponent,
   // ProjectItemListComponent,
   // SubscriptionFormComponent
  ]
})
export class AppModule { }
