import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectItemService{
    projectItems = [
        {
            id: 1,
            title: 'Test Project Title 1',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 1'
        },
        {
            id: 2,
            title: 'Test Project Title 2',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 2'
        },
        {
            id: 3,
            title: 'Test Project Title 3',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 3'
        },
        {
            id: 4,
            title: 'Test Project Title 4',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 4'
        }
    ]

    get(){
        return this.projectItems;
    }

    add(projectItem){
        this.projectItems.push(projectItem);
    }

    delete(projectItem){
        const index = this.projectItems.indexOf(projectItem);
        if(index >=0){
            this.projectItems.splice(index,1);
        }
    }
}