import { newSpecPage } from '@stencil/core/testing';
import { UserDetailsForm } from '../user-details-form';

describe('user-details-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UserDetailsForm],
      html: `<user-details-form></user-details-form>`,
    });
    expect(page.root).toEqualHtml(`
      <user-details-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </user-details-form>
    `);
  });
});
