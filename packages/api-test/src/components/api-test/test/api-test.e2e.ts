import { newE2EPage } from '@stencil/core/testing';

describe('api-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<api-test></api-test>');

    const element = await page.find('api-test');
    expect(element).toHaveClass('hydrated');
  });
});
