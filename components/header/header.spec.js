import { render, screen } from "@testing-library/react";

import Header from ".";

describe("<Header />", () => {
  it("Should render Header", () => {
    render(<Header onTypeSearch={() => null} />);

    expect(
      screen.getByPlaceholderText("Nunca dejes de buscar")
    ).toBeInTheDocument();
  });
});
