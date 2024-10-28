import { AttachInternals, Component, Event, EventEmitter, h, State } from '@stencil/core';

@Component({
  tag: 'user-details-form',
  styleUrl: 'user-details-form.css',
  shadow: true,
  formAssociated: true
})
export class UserDetailsForm {

  @State() username: string
  @State() role: string
  @State() skills = []

  @AttachInternals() internals: ElementInternals;
  @Event({
    eventName: 'formCompleted'
  }) formCompleted: EventEmitter<any>;

  userDetailsObject = {
    username: null,
    role: null,
    skills: []
  }

  componentWillLoad() {
    // this.internals.setFormValue({
    //   "username": 'test',
    //   "role": "developer",
    //   "skills": []
    // });
  }

  submitDetails(e) {
    e.preventDefault(); // prevent stencil comp reloading after submit click

    this.userDetailsObject['username'] = this['username']
    this.userDetailsObject['role'] = this['role']
    this.userDetailsObject['skills'] = this['skills']

    console.log("this.userDetailsObject", this.userDetailsObject)
    const temp = {...this.userDetailsObject};
    delete temp['skills']
    this.formCompleted.emit(temp)
  }

  handleChange(event) {
    this.username = event.target.value;
    //this.internals.setFormValue(event.target.value);
  }

  handleRadio(event) {
    this.role = event.target.value;
    //this.internals.setFormValue(event.target.value);
  }

  handleCheck(e, skill) {
    // console.log('handleCheck', (e as HTMLInputElement).checked)
    // this.skills = (e as HTMLInputElement).checked
    console.log(e)
    this.skills.push(skill);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitDetails(e)}>

        <div>
          <label htmlFor="username">Username: </label>
          <input type='text' name='username'
            value={this.username}
            onInput={(e) => this.handleChange(e)}></input>
        </div>


        <div class="mt-15">
          <span>Role:</span>
          <input type='radio' name='role' value="developer" onChange={(e) => this.handleRadio(e)}></input>
          <label htmlFor='role'>Developer</label>

          <input type='radio' name='role' value="tester" onChange={(e) => this.handleRadio(e)}></input>
          <label htmlFor='role'>Tester</label>

          <input type='radio' name='role' value="manager" onChange={(e) => this.handleRadio(e)}></input>
          <label htmlFor='role'>Manager</label>
        </div>


        {/* <div class="mt-15">
          <span>Skills:</span>
          <input type='checkbox' name='stencil' onChange={(e)=> this.handleCheck(e, 'stencil')}></input>
          <label htmlFor="stencil">Stencil</label>
          <input type='checkbox' name='angular' onChange={(e)=> this.handleCheck(e, 'angular')}></input>
          <label htmlFor="angular">Angular</label>
          <input type='checkbox' name='jasmine' onChange={(e)=> this.handleCheck(e, 'jasmine')}></input>
          <label htmlFor="jasmine">Jasmine</label>
        </div> */}

        <div class="mt-15">
          <button type='submit'>Submit</button>
        </div>

        <br></br>

      </form>
    );
  }
}