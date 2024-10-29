import { newSpecPage } from '@stencil/core/testing';
import { ApiTest } from '../api-test';

describe('api-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApiTest],
      html: `<api-test></api-test>`,
    });
    expect(page.root).toEqualHtml(`
      <api-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </api-test>
    `);
  });
});
