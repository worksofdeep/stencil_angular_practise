import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'table-display-tag',
  styleUrl: 'table-display-tag.css',
  shadow: true,
})
export class TableDisplayTag {

  @Prop() data: any[] = []
  @Prop() columns: string[] = ['id', 'name']
  tableHeader;
  tableBody;
  @State() tableItems;
  @Prop({mutable: true}) tableData: any[] = []
  // @Prop() tableData: any[] = [
  //   { "id": "1", "name": "Google Pixel 6 Pro" },
  //   { "id": "2", "name": "Apple iPhone 12 Mini, 256GB, Blue" }]
  @Prop() first: string = 'default'


  @Watch('first')
  @Watch('tableData')
  updateTableUI() {
    this.tableItems = this.tableData.map((element) => {
      return <tr><td>{element.id}</td>
        <td>{element.name}</td></tr>;
    })
  }

  componentWillLoad() {
    this.updateTableUI();
  }

  // componentDidLoad() {
  //   this.updateTableUI();
  // }

  addItem() {
    const temp = [
      { "id": "1", "name": "Google Pixel 6 Pro" },
      { "id": "2", "name": "Apple iPhone 12 Mini" }];
    /// this.data = [...temp]
    this.tableData = [...temp]
  }

  // @Watch('data')
  // watchDataHandler(newValue: boolean, oldValue: boolean) {
  // }

  getHeader() {

    if (this.columns.length === 0) {
      return
    }

    this.tableHeader = this.columns.map((key) => {
      return <th>{key}</th>
    })
    this.tableHeader = <tr>{this.tableHeader}</tr>;
    return this.tableHeader
  }

  getBody() {
    this.tableBody = '';

    if (this.data.length === 0) {
      return
    }

    // this.data.forEach((element) => {
    //   let temp = <tr>;
    //   this.columns.forEach((keyElement) => {
    //     let value = element['id'];
    //     temp = temp<td>{value}</td>;
    //   });

    //   temp = {temp} + </tr>;
    //   let rowtemp = <tr>{temp}</tr>
    //   this.tableBody = this.tableBody + rowtemp;
    // })
    return this.tableBody
  }

  getTableHTML() {



    // this.tableBody = '';
    // this.data.forEach((element) => {
    //   let temp;
    //   this.columns.forEach((keyElement) => {
    //     temp = this.tableBody + <td>{element[keyElement]}</td>
    //   })
    //   this.tableBody = <tr> + {temp} + </tr>;
    // })
    // console.log(this.tableHeader)
    // let result = <> + {this.tableHeader} + {this.tableBody} + </> 
    // console.log(result)
    // return result
  }


  render() {
    return (
      <div>
        <h6>TABLE DISPLAY COMPONENT</h6>
        <button onClick={this.addItem.bind(this)}>TEST</button>
        <div>
          <h6>TABLE</h6>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
              {this.tableItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
