import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';

describe('<Breadcrumbs />', () => {
  it('Should correctly render breadcrumbs', () => {
    const mockedArrayOfItems = ['first', 'second'];

    render(<Breadcrumbs items={mockedArrayOfItems} />);

    expect(screen.getByText('second')).toBeInTheDocument();
  });
});
