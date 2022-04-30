import debounce from 'lodash.debounce';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '.';

// Tell Jest to mock this import
jest.mock('lodash.debounce');

describe('<Searchbar />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should correctly render Searchbar', () => {
    render(<SearchBar placeholder="test placeholder" onTypeSearch={() => null} />);

    expect(screen.getByPlaceholderText('test placeholder')).toBeInTheDocument();
  });

  it('Should correctly call Searchbar onTypeSearch', () => {
    const mockedOnTypeSearch = jest.fn();

    debounce.mockImplementation((fn) => fn);

    render(<SearchBar placeholder="test placeholder" onTypeSearch={mockedOnTypeSearch} />);

    fireEvent.change(screen.getByPlaceholderText('test placeholder'), {
      target: { value: 'iphone' }
    });

    expect(mockedOnTypeSearch).toBeCalled();
  });
});
