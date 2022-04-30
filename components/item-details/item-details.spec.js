import { render, screen } from '@testing-library/react';
import DetailsCard from '.';

describe('<DetailsCard />', () => {
  it('Should correctly render DetailsCard', () => {
    const product = {
      id: 'MLA908022865',
      title: 'Apple iPhone 12 (128 Gb) - Negro',
      price: {
        currency: 'ARS',
        amount: 249900,
        decimals: 2
      },
      picture: 'http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 0
    };

    render(<DetailsCard product={product} loading={false} />);

    expect(screen.getByText('Apple iPhone 12 (128 Gb) - Negro')).toBeInTheDocument();
  });

  it('Should correctly render DetailsCard loading', () => {
    const product = {};

    render(<DetailsCard product={product} loading />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
