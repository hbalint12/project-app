import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-subscription-form',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionFormComponent implements OnInit{
    form: FormGroup;

    constructor(private formBuilder: FormBuilder){}
    
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])
            ),
            email: this.formBuilder.control('', Validators.compose([
                Validators.required,
                this.emailValidator
            ]))
        });
    }

    emailValidator(control: FormControl){
        if(control.value.trim().length === 0){
            return null;
        }
        if (!!control.value.includes('@') && !!control.value.includes('.')){
            return null;
        } else {
            return { email: true };
        }
    }

    onSubmit(subscriptionItem){
        console.log(subscriptionItem);
    }
}