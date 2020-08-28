import { Component, OnInit } from '@angular/core'
import { ProjectItemService } from '../services/project-item.service'

@Component({
    selector: 'app-detailed',
    templateUrl: './detailed-project.component.html',
    styleUrls: ['./detailed-project.component.css']
})
export class DetailedProjectComponent implements OnInit{
    projectItems;

    constructor(private projectItemService: ProjectItemService){}

    ngOnInit(){
        this.projectItems = this.projectItemService.get();
    }
}