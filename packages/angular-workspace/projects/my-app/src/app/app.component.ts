import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resetForm = false;

  formSubmitted(event: any) {
    console.log("angular component:", event['detail'])
  }

  resetUserDetails() {
    this.resetForm = !this.resetForm;
  }
}
