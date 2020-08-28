import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectItemService{
    projectItems = [
        {
            id: 1,
            title: 'Test Project Title 1',
            subheader: 'Test project subhead 1',
            summary: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 
            category: 'Test Category 1',
            categoryList: ['Test Category 1','Test Category 2','Test Category 3'],
            technologyList: ['Test technology 1','Test technology 2','Test technology 3']
        },
        {
            id: 2,
            title: 'Test Project Title 2',
            subheader: 'Test project subhead 2',
            summary: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 2',
            categoryList: ['Test Category 1','Test Category 2','Test Category 3'],
            technologyList: ['Test technology 1','Test technology 2','Test technology 3']
        },
        {
            id: 3,
            title: 'Test Project Title 3',
            subheader: 'Test project subhead 3',
            summary: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 3',
            categoryList: ['Test Category 1','Test Category 2','Test Category 3'],
            technologyList: ['Test technology 1','Test technology 2','Test technology 3']
        },
        {
            id: 4,
            title: 'Test Project Title 4',
            subheader: 'Test project subhead 4',
            summary: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            description: 'Project short summary.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            category: 'Test Category 4',
            categoryList: ['Test Category 1','Test Category 2','Test Category 3'],
            technologyList: ['Test technology 1','Test technology 2','Test technology 3']
        }
    ]

    get(){
        return this.projectItems;
    }

    getById(id){
        return this.projectItems.filter(i => i.id == id).pop();
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