import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform{
    transform(projectItems) {
        const categories = [];
        projectItems.forEach(projectItem => {
            if (categories.indexOf(projectItem.category) <= -1){
                categories.push(projectItem.category)
            }
        });
        return categories.join(" ")
    }
}