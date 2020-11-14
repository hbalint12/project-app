import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectItemService{
    projectItems = [
        {
            id: 1,
            title: 'Time Series Analysis with Deep Learning',
            subheader: 'Stock price prediction with Apache Spark and LSTM',
            summary: 'The subject of my project is time series analysis with a deep learning approach and how the examined group of algorithms could be transferred to a distributed system in order to predict stock and foreign exchange prices.',
            abstract: "The subject of my thesis is time series analysis with a deep learning approach and how the examined group of algorithms could be transferred to a distributed systemin order to predict stock and foreign exchange prices. During my research, I acquired adeep understanding of state-of-the-art deep learning algorithms, I designed andimplemented a LSTM (Long Short-Term Memory) algorithm using the TensorFlowlibrary. This model is able to learn and predict real stock market prices. Deep learning based prediction approaches need a significant amount of data to work on, which endsup increasing also the computation time greatly. To solve these issues, I used adistributed solution of Apache Spark to process the data, because it provides a welldocumented interface, which enables coding the cluster and also it supports parallel dataprocessing as well. The framework requires a distributed file system, that is supportedby Spark. For that I chose the Hadoop Distributed File System. I trained and evaluatedmy model on the distributed system, my results are accompanied with figures and tables in order to provide a better understanding of my task",
            description: "Time series analysis with a deep learning approach and how the examined group of algorithms could be transferred to a distributed system in order to predict stock and foreign exchange prices.",
            category: 'Distributed Deep  Learning',
            categoryList: ['Apache Spark','Distributed Deep Learning'],
            technologyList: ['Apache Spark','Python','LSTM']
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