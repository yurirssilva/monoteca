import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'user-app',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],    
})

export class UserComponent implements OnInit{
    constructor (private service: AuthenticationService){ }
    
    ngOnInit(){
        console.log('teste');
    }

}