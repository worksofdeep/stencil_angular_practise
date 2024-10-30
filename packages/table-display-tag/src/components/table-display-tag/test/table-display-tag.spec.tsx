import { newSpecPage } from '@stencil/core/testing';
import { TableDisplayTag } from '../table-display-tag';

describe('table-display-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TableDisplayTag],
      html: `<table-display-tag></table-display-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <table-display-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </table-display-tag>
    `);
  });
});
