import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resetForm = false;

  temp = [{ "id": "1", "name": "Google Pixel 6 Pro", "data": { "color": "Cloudy White", "capacity": "128 GB" } }, { "id": "2", "name": "Apple iPhone 12 Mini, 256GB, Blue", "data": null }]

  ngOnInit() {
    this.temp = [...this.temp]
  }

  formSubmitted(event: any) {
    console.log("angular component:", event['detail'])
  }

  resetUserDetails() {
    this.resetForm = !this.resetForm;
  }

  tableUpdated(event: any) {
    console.log("tableUpdated", event['detail'])
    this.temp = [...event['detail']]
  }
}
