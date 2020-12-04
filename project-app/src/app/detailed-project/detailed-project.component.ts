import { Component, OnInit, NgProbeToken, ViewEncapsulation } from '@angular/core'
import { ProjectItemService } from '../services/project-item.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-detailed',
    templateUrl: './detailed-project.component.html',
    styleUrls: ['./detailed-project.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DetailedProjectComponent implements OnInit{
    projectItem;

    constructor(private projectItemService: ProjectItemService, private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.activatedRoute.paramMap.subscribe(paramMap => {
            let projectItemId = paramMap.get('id');
            this.projectItem = this.projectItemService.getById(projectItemId);
        })
    }
}