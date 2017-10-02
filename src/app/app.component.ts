import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <user></user>
  `,
})
export class AppComponent  { 
  name = 'Alexis Bravo'; 
  email = 'alexis.ve@gmail.com';
  address = {
    street : 'Pedro Vicente Maldonado Avenue',
    city : 'Quito',
    state : 'Pichincha'
  };

}
