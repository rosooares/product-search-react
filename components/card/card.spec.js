import { render, screen } from '@testing-library/react';
import Card from '.';

describe('<Card />', () => {
  it('Should correctly render Card', () => {
    render(
      <Card>
        <div>Testing card</div>
      </Card>
    );

    expect(screen.getByText('Testing card')).toBeInTheDocument();
  });
});
