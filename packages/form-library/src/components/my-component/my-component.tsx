import { Component, EventEmitter,Event, Host, State, h } from '@stencil/core';
import * as _ from 'lodash';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class ApiTest {

  @State() tableData: any = []
  @State() deviceName = '';
  @State() deleteID = '';
  @State() tableItems;
  @Event({ eventName: 'tableUpdated' }) tableUpdated: EventEmitter<any>;

  async deleteData(id) {
    if (this.deleteID.trim().length === 0) {
      alert("Invalid id for deletion")
      return;
    }
    try {
      await fetch(`https://api.restful-api.dev/objects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
      this.deleteDataInArray(id)
      this.deleteID = '';
      this.updateTableUI();
    }
    catch (err) {
      console.log(err)
    }

  }


  deleteDataInArray(id) {
    _.remove(this.tableData, (element) => {
      return element['id'] == id
    })
    console.log("id", id)
  }


  async getData() {
    const response = await fetch("https://api.restful-api.dev/objects");
    const json = await response.json();
    this.tableData = json;
    this.updateTableUI();
  }

  async postData() {

    if (this.deviceName.trim().length == 0) {
      alert('Enter Device Name')
      return;
    }

    const requestBody = {
      "name": this.deviceName.trim(),
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }

    try {
      const response = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const temp = await response.json();

      this.tableData.push(temp)
      this.deviceName = '';
      this.updateTableUI();
    } catch (err) {
      console.log(err)
    }
  }

  handleChange(event) {
    this.deviceName = event.target.value;
  }

  handleChangeID(event) {
    this.deleteID = event.target.value;
  }

  updateTableUI() {

    this.tableItems = this.tableData.map((element) => {
      return <tr><td>{element.id}</td>
        <td>{element.name}</td></tr>;
    })
    this.tableUpdated.emit(this.tableData)
  }

  render() {
    return (
      <Host>
        <slot>
          <h4>API TEST</h4>
          <div>
            <button onClick={this.getData.bind(this)}>GET DATA</button>
          </div>
          <br></br><br></br><br></br>
          <div>
            <input type='text' name='deviceName' value={this.deviceName}
              placeholder='Enter Name'
              onInput={(e) => this.handleChange(e)}></input>
            <button onClick={this.postData.bind(this)}>POST DATA</button>
            <br></br><br></br><br></br>
            <input type='text' name='deleteID' value={this.deleteID}
              placeholder='Enter ID to be deleted'
              onInput={(e) => this.handleChangeID(e)}></input>

            <button onClick={this.deleteData.bind(this, this.deleteID)}>DELETE DATA BY ID</button>
          </div>

          {/* <div>
            <h6>TABLE</h6>
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
              {this.tableItems}
            </table>
          </div> */}

        </slot>
      </Host>
    );
  }
}
