import { Component,OnInit } from '@angular/core';
import { ProjectItemService } from './services/project-item.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-app';
  onDeleteProjectItem(projectItem){}
  projectItems;

    constructor(private projectItemService: ProjectItemService){}

    ngOnInit(){
        this.projectItems = this.projectItemService.get();
    }
}
