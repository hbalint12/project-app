import { Component, OnInit,AfterViewInit,ChangeDetectorRef,HostListener } from '@angular/core'
import { ProjectItemService } from '../services/project-item.service'
import { trigger,state,style,animate,transition,keyframes } from '@angular/animations';

@Component({
    selector: 'app-project-item-list',
    templateUrl: './project-item-list.component.html',
    styleUrls: ['./project-item-list.component.css'],
    animations: [
        trigger('slide-in',[
            state('in', style({
              opacity: "1"
            })),
            state('out', style({
              transform: 'translateX(0px)',
            })),
            transition('in => out',
              animate('1000ms ease-in', keyframes([
                style({ opacity: 0, offset: 0}),
                style({ opacity: 0.5, offset: 0.5}),
                style({ opacity: 1, offset: 1}),
              ]))),
          ])
        ]
})
export class ProjectItemListComponent implements OnInit,AfterViewInit { 
    projectItems;
    
    state: string = 'out';

    constructor(private projectItemService: ProjectItemService,private changeDetectorRef: ChangeDetectorRef){}

    ngOnInit(){
        this.projectItems = this.projectItemService.get();
        this.state = 'in';
    }

    ngAfterViewInit() {
       this.state = (this.state === 'in' ? 'out' : 'in');
       this.changeDetectorRef.detectChanges();
    }
}