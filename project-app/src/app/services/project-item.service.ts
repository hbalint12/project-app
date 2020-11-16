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
            abstract: "",
            description: [ 
                "<h5>Abstract</h5><br>",
                '<article style="text-indent:50px;">During my research, I acquired a deep understanding of state-of-the-art deep learning algorithms, I designed and implemented a LSTM (Long Short-Term Memory) algorithm using the TensorFlow library. This model is able to learn and predict real stock market prices. Deep learning based prediction approaches need a significant amount of data to work on, which ends up increasing also the computation time greatly. To solve these issues, I used adistributed solution of Apache Spark to process the data, because it provides a well documented interface, which enables coding the cluster and also it supports parallel dataprocessing as well. The framework requires a distributed file system, that is supportedby Spark. For that I chose the Hadoop Distributed File System. I trained and evaluated my model on the distributed system, my results are accompanied with figures and tables in order to provide a better understanding of my task. The following description is short summary of the project work.</article>',
                "<br>",
                "<h5>1. Introduction</h5><br>",
                "<article>Prediction of stock prices can be crucial for investors, who would able to leverage with the help of this information. The trends are affected by several factors (physical or physiological, rational or irrational behaviour), which makes the accurate prediction very hard. For the discovery of these patterns, hidden structures and connections the most effective way is the machine and deep learning approach. The stock and currency price prediction based on previous trends with the assumption of existing patterns in the data is called technical analysis. There are many time series analyis methods but with the rapid development of technology the deep learning algorithms reached the best results, especially the Long Short-Term Memory model, which will be discussed hereby.</article>",
                "<br>",
                "<h5>2. Recurrent Neural Networks (RNN)</h5><br>",
                "<article>The time series data, like the stock prices, are extremely complex and constantly changing. Because the deep learning models don't make assumptions on patterns in the data and they are robust on noise, which means on the random deviations in the series, they are proper choice for time series analysis. The Recurrent Neural Network is well-known model for these kind of problems. In contrast to tradicional neural networks this architecture facilitate the processing of sequences. <br><br><div class='img-with-text'><img class='col-12 col-md-7 offset-md-2 offset-0' src='../assets/rnn.png' alt='RNN'/><p>1. Recurrent Neural Network</p></div><br>The architecture of the neural network was designed to be able to condsider events and to use that information in the future. This model became popular on several fields, like speech recognition or translation. However, it has limits, which can be shown by a language modelling issue. In case the model should predict the last word of the sentence: \"The clouds are in the sky\", it doesn't require any further context. The prediction of the following sentence does: \"I speak fluent French\", because the information, which language I speak, could have been told by serveral sentences before and that is the problem. The gap between the necessary information and the usage of it is way too large and the model cannot learn that. In details it means the following. During the backpropagation the algorithm uses the value of the gradient to refresh the weights of the neural network. After a while this gradient value decreases to such low that it will not have any affect on the learning. This happens mostly in the early moduls of the RNN, which stop learning and due to that the model cannot learn the long term dependencies. This limit is exceeded by the modified version of this model, which is called the Long Short-Term Memory.</article>",
                "<br>",
                "<h5>3. Long Short-Term Memory (LSTM)</h5><br>",
                "<article>The LSTM model was designed in 1997 in order to overcome the limitation of the RNNs and be able to learn long term dependencies. The structute is similarly to the RNN's is chained but the inside of the moduls are much more complex. <br><br><div class='img-with-text'><img class='col-12 col-md-7 offset-md-2 offset-0' src='../assets/lstm.png' alt='LSTM'/><p>2. Long Short-Term Memory</p></div><br><div class='img-with-text'><img class='col-12 col-md-7 offset-md-2 offset-0' src='../assets/lstm_parts.png' alt='LSTM parts'/><p>3. Long Short-Term Memory notation</p></div><br>The greatest leverage of this model compared to the RNN that it is solving the vanishing gradient problem. The key part of the LSTM model is the cell state, which is the arrow above on the picture number 4, notated with C at the start and the end. Due to the inner structure of the modul the model can add and remove information from the cell state with the so called gates. The first gate highlighted on the 4. picture, is the forget gate. It can deiced whith the sigmoid function, which information will be neglected by the model.<br><br><div class='img-with-text'><img class='col-12 col-md-5 offset-md-2 offset-0' src='../assets/forget_gate.png' alt='Forget gate'/><p>1. LSTM forget gate</p></div><br></article>"
            ],
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