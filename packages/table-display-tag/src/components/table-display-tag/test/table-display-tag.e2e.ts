import { newE2EPage } from '@stencil/core/testing';

describe('table-display-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<table-display-tag></table-display-tag>');

    const element = await page.find('table-display-tag');
    expect(element).toHaveClass('hydrated');
  });
});
