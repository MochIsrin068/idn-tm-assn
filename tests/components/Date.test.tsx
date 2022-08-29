import React from "react";
import { render, screen } from "@testing-library/react";
import Date from "../../components/content/Date";

const mockProps = {
  dateString: "2022-08-25",
};

describe("tests components Date", () => {
  it("Perform snapshots test Date", () => {
    const inputDefaultTree = render(<Date {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text date rendered on screen", () => {
    render(<Date {...mockProps} />);
    const date = screen.getByText(/August 25, 2022/i);
    expect(date).toBeInTheDocument();
  });

  it("test text date rendered on screen with custom props", () => {
    render(<Date {...mockProps} dateString="2022-07-28" />);
    const date = screen.getByText(/July 28, 2022/i);
    expect(date).toBeInTheDocument();
  });

  // optional checker and need query by text becouse that not rendered
  it("test text date wrong rendered on screen", () => {
    render(<Date {...mockProps} />);
    const date = screen.queryByText(/August 29, 2022/i);
    expect(date).not.toBeInTheDocument();
  });
});
