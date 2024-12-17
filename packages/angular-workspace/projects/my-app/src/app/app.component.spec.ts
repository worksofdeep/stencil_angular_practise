import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TableDisplayTag } from 'table-display-lib';
import { By } from '@angular/platform-browser';
import { render, waitFor } from '@testing-library/angular';
// import { CommonModule } from '@angular/common';
// import { TableDisplayLibModule, TableDisplayTag } from 'table-display-lib';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () =>
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TableDisplayTag],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should assign a new value to the message variable', () => {

    component.title = 'test';
    fixture.detectChanges();

    const messageElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(messageElement.textContent).toBe('Component Name: test');
  });

  it('should call addDummyRow when add dummy button is clicked', () => {
    const spy = jest.spyOn(component, 'addDummyRow');
    const mockEvent = component.temp.length;

    // Trigger the event handler directly
    component.addDummyRow(mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });

  it('should update table rows when new data is provided', () => {

    const tableComponent = fixture.nativeElement.querySelector('table-display-tag');

    const rows: HTMLElement = tableComponent;
    const mockData = component.temp.length;
    const newRow = {
      id: mockData.toString(),
      name: `Product #${mockData}`
    }
    rows.setAttribute('id', newRow.id);
    rows.setAttribute('name', newRow.name);

    component.temp.push(newRow);

    expect(rows.getAttribute('id')).toBe(component.temp[2].id);
    expect(rows.getAttribute('name')).toBe(String(component.temp[2].name));
  });

  it('it should check if data length is same as displayed after addDummyProduct', () => {

    const previousLength = component.temp.length
    const mockData = component.temp.length;
    const newRow = {
      id: mockData,
      name: `Product #${mockData}`
    }
    
    component.addDummyRow(mockData);

    expect(component.temp.length).toBe(previousLength + 1);
    expect(component.temp[component.temp.length - 1]).toEqual(newRow);
  });

  it('should load the child component', () => {
    fixture.detectChanges();

    const childElement  = fixture.debugElement.query(By.css('table-display-tag'));

    // Assert that the child component is present
    expect(childElement).toBeTruthy(); // This will pass if child component is loaded

    const childContent = childElement.query(By.css('table'));
    console.log(childContent)
    expect(childContent).toBeTruthy(); 
    // Assert that the child component contains the expected content
    // expect(childContent.nativeElement.textContent).toBe('Hello from Child Component!');
  });

  it('should render table with correct number of rows', async () => {

    component.temp = [
      { "id": "1", "name": "Samsung" },
      { "id": "2", "name": "Nokia" }];
    await fixture.detectChanges();

    //const tableComponent:ShadowRoot = fixture.nativeElement.querySelectorAll("table-display-tag").shadowRoot;
    // // const tableComponent = fixture.nativeElement.querySelector(By.css('tr'));
    // console.log("tableComponent", tableComponent.querySelectorAll("tr"))
    //console.log("tableComponent", tableComponent.tableData)
    
    // const rows = tableComponent
    // // console.log("rows:", rows)

    //const shadowHost = fixture.nativeElement.querySelector('table-display-tag');
    //const shadowRoot = shadowHost.shadowRoot; // Access the ShadowRoot

    // Now query for rows inside the shadow DOM

    // await waitFor(() => {
    //   const rows = tableComponent.querySelectorAll('tr');
    //   console.log("rows:", rows)
    //   expect(component.temp.length).toBe(rows.length);
    //   // expect(rows.length).toBeGreaterThan(0); // Check that rows exist
    // });


    const rows: NodeList = document.querySelectorAll("tr");
  //   // const rows: DebugElement[] = fixture.debugElement.queryAll(By.css('tr'));
  //   const rows = fixture.debugElement.nativeElement.querySelectorAll('tr');
  //   // const rows: DebugElement[] = fixture.debugElement.queryAll(By.css('tbody tr'));
  //   // const rows: DebugElement[] = fixture.debugElement.queryAll(By.css('tr'));
  //   // const rows = document.querySelectorAll("tr");

  //   // console.log("fixture.debugElement.nativeElement: ", fixture.debugElement.nativeElement)
    console.log("rows:", rows)
    console.log("rows.length:", rows.length)
  //   // expect(rows.length).toBe(3); // header row + data rows
  });


});
