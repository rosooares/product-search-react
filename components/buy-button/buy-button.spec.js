import { render, screen } from '@testing-library/react';
import BuyButton from '.';

describe('<BuyButton />', () => {
  it('Should correctly render buybutton', () => {
    render(<BuyButton />);

    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });
});
