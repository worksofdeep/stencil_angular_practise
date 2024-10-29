import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'api-test',
  styleUrl: 'api-test.css',
  shadow: true,
})
export class ApiTest {

  @State() tableData: any = []

  async getData() {
    console.log("getting data...")
    const response = await fetch("https://api.restful-api.dev/objects");
    const json = await response.json();
    this.tableData = json
    console.log("tableData", this.tableData)
  }

  render() {
    return (
      <Host>
        <slot>
          <h4>API TEST</h4>
          <div>
            <button onClick={this.getData.bind(this)}>GET DATA</button>
          </div>
        </slot>
      </Host>
    );
  }
}
