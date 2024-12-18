import { newSpecPage } from '@stencil/core/testing';
import { TableDisplayTag } from '../table-display-tag';

describe('table-display-tag', () => {


  // no props
  it('renders without prop', async () => {
    const page = await newSpecPage({
      components: [TableDisplayTag],
      html: `<table-display-tag></table-display-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <table-display-tag>
        <mock:shadow-root>
          <div>
        <h6>TABLE DISPLAY COMPONENT</h6>
        <button >TEST</button>

        <div>
          <h6>TABLE</h6>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
            
          </table>
        </div>
      </div>
        </mock:shadow-root>
      </table-display-tag>
    `);
  });


  // values test
  it('renders data passed as prop', async () => {
    const page = await newSpecPage({
      components: [TableDisplayTag],
      html: `<table-display-tag></table-display-tag>`,
    });

    page.rootInstance.tableData = [
      { "id": "1", "name": "Google Pixel 6 Pro" },
      { "id": "2", "name": "Apple iPhone 12 Mini" }];

    await page.waitForChanges();


    const rows = page.root.shadowRoot.querySelectorAll('table tbody tr');
    //console.log(rows);
    expect(rows.length).toBe(3); // Should render 1 row for the default user
    expect(rows[0].textContent).toContain('ID');
    expect(rows[0].textContent).toContain('Name');
    expect(rows[1].textContent).toContain('Google Pixel 6 Pro');
    expect(rows[1].textContent).toContain('1');
    expect(rows[2].textContent).toContain('Apple iPhone 12 Mini');
    expect(rows[2].textContent).toContain('2');

  });

  // values test
  it('different approach', async () => {
    const page = await newSpecPage({
      components: [TableDisplayTag],
      html: `<table-display-tag></table-display-tag>`,
    });

    page.rootInstance.tableData = [
      { "id": "1", "name": "Google Pixel 6 Pro" },
      { "id": "2", "name": "Apple iPhone 12 Mini" }];

    await page.waitForChanges();


    expect(page.root).toEqualHtml(`
        <table-display-tag>
          <mock:shadow-root>
           <div>
           <h6>TABLE DISPLAY COMPONENT</h6>
           <button>TEST</button>
           <div>
           <h6>TABLE</h6>
           <table>
           <tbody>
           <tr>
           <th>ID</th>
           <th>Name</th>
           </tr>
           <tr><td>1</td><td>Google Pixel 6 Pro</td></tr>
           <tr><td>2</td><td>Apple iPhone 12 Mini</td></tr>
           </tbody>
           </table>
           </div>
           </div>
          </mock:shadow-root>
        </table-display-tag>
      `);
  });



});
