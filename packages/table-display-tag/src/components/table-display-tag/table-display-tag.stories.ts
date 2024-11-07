
// export default {
//   title: 'Components/TableDisplayTag',
//   parameters: {
//     actions: {
//       argTypesRegex: '^on.*',
//       handles: ['click'] // you can add custom events to this array to trigger actions
//     }
//   }
// };
// //const Template = (args) => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;
// const Template = (args) => `<table-display-tag tableData="${args.temp}"></table-display-tag>`;



// export const Default = Template.bind({});
// Default.args = {
//   first: 'Winnie',
//   temp: [{ "id": "3", "name": "Google Pixel 6 Pro" },
//   { "id": "4", "name": "Apple iPhone 12 Mini, 256GB, Blue" }]
// };

//___________________________________________________________________________________


import { Meta, StoryFn } from "@storybook/web-components";
import { html } from "lit";
import { TableDisplayTag } from "./table-display-tag";
 
export default{
    title: 'Components/TableDisplayTag',
    component: 'table-display-tag',
    args: {
      tableData : { control: 'object' },
    },
} as Meta;
 
const mockData = [{ "id": "3", "name": "Google Pixel 6 Pro" },
    { "id": "4", "name": "Apple iPhone 12 Mini, 256GB, Blue" }]

    const mockData2 = [{ "id": "999", "name": "Google Pixel 6 Pro" },
      { "id": "888", "name": "Apple iPhone 12 Mini, 256GB, Blue" }]
 
 
const tableTemplate: StoryFn<TableDisplayTag> = (args)=> html`<table-display-tag
        .tableData=${args.tableData}
    ></table-display-tag>`;
 
export const Default = tableTemplate.bind({});
Default.args = {
  tableData: mockData
};
 
export const Secondary = tableTemplate.bind({});
Secondary.args = {
  tableData: mockData2
};
 

 
 

