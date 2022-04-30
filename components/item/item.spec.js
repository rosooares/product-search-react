import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Item from ".";

const mockedItem = {
  id: "MLA908022865",
  title: "Apple iPhone 12 (128 Gb) - Negro",
  price: {
    currency: "ARS",
    amount: 249900,
    decimals: 2,
  },
  picture: "http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg",
  condition: "new",
  free_shipping: true,
  sold_quantity: 0,
};

describe("<Searchbar />", () => {
  it("Should correctly render Item", () => {
    render(<Item item={mockedItem} position={0} />);

    expect(screen.getByTestId("thumbnail")).toBeInTheDocument();
  });

  it("Should correctly call history API", () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    render(
      <Router history={historyMock}>
        <Item item={mockedItem} position={0} />
      </Router>
    );

    screen.getByTestId("item-item").click();

    expect(historyMock.push.mock.calls[0]).toBeTruthy();
  });
});
