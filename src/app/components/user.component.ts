import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address: </strong>{{address.street}}, {{address.city}}, {{address.state}}</p>
  <button (click)="toggleHobbies()">{{ showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>
  
  <div *ngIf="showHobbies">
    <h3>Hobbies: </h3>
    <ul>
        <li *ngFor="let hobby of hobbies">{{hobby}}</li>
    </ul>
  </div>
  <hr />
  <h3>Edit User</h3>
    <form>
        <label for="name">Name: </label><br />
        <input type="text" name="name" id="id" [(ngModel)]="name" /><br />

        <label for="name">E-mail: </label><br />
        <input type="text" name="email" id="email" [(ngModel)]="email" /><br />
        
        <label for="name">Street: </label><br />
        <input type="text" name="address.street" id="street" [(ngModel)]="address.street" /><br />
        
        <label for="name">City: </label><br />
        <input type="text" name="address.city" id="city" [(ngModel)]="address.city" /><br />

        <label for="name">State: </label><br />
        <input type="text" name="address.state" id="state" [(ngModel)]="address.state" /><br />

    </form>
  `,
})

export class UserComponent  { 
  name: string; 
  email: String;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

    //It runs everytime the component is rendered
    constructor() {
        console.log('Constructor ran!');
        this.name = "Esperanza Llovera";
        this.email = 'alexis.ve@gmail.com';
        this.address = {
            street : 'Pedro Vicente Maldonado Avenue',
            city : 'Quito',
            state : 'Pichincha'
        };
        this.hobbies = ['Family', 'Help', 'Coding'];
        this.showHobbies = false;
    }

    toggleHobbies() {
        console.log("Showing hobbies");
        if(this.showHobbies)
            this.showHobbies = false;
        else
            this.showHobbies = true;
    }

}

interface address {
    street: string;
    city: string;
    state: string;   
}