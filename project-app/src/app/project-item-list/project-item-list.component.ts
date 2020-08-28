import { Component, OnInit } from '@angular/core'
import { ProjectItemService } from '../services/project-item.service'

@Component({
    selector: 'app-project-item-list',
    templateUrl: './project-item-list.component.html',
    styleUrls: ['./project-item-list.component.css']
})
export class ProjectItemListComponent implements OnInit{
    projectItems;

    constructor(private projectItemService: ProjectItemService){}

    ngOnInit(){
        this.projectItems = this.projectItemService.get();
    }
}