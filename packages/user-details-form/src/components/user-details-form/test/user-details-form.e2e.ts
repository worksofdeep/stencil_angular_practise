import { newE2EPage } from '@stencil/core/testing';

describe('user-details-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-details-form></user-details-form>');

    const element = await page.find('user-details-form');
    expect(element).toHaveClass('hydrated');
  });
});
