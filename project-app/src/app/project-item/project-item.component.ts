import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
    @Input('projectItem') projectItem;
    @Output() delete = new EventEmitter();

    onDelete(projectItem) {
        this.delete.emit(this.projectItem)
    }
}