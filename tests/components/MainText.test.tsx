import React from "react";
import { render, screen } from "@testing-library/react";
import MainText from "../../components/content/MainText";

const mockProps = {
  primaryText: "Sergio Bernhard",
  secondaryText: "Verified Creator",
  isFix: true,
};

describe("tests components MainText", () => {
  it("Perform snapshots test MainText", () => {
    const inputDefaultTree = render(<MainText {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text primaryText rendered on screen", () => {
    render(<MainText {...mockProps} />);
    const text = screen.getByText(/Sergio Bernhard/i);
    expect(text).toBeInTheDocument();
  });

  it("test text primaryText rendered on screen with custom props", () => {
    render(<MainText {...mockProps} primaryText="IDN Media Admin" />);
    const text = screen.getByText(/IDN Media Admin/i);
    expect(text).toBeInTheDocument();
  });

  // optional checker and need query by text becouse that not rendered
  it("test text primaryText wrong rendered on screen", () => {
    render(<MainText {...mockProps} />);
    const text = screen.queryByText(/IDN Media Admin test/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text secondaryText rendered on screen", () => {
    render(<MainText {...mockProps} />);
    const text = screen.getByText(/Verified Creator/i);
    expect(text).toBeInTheDocument();
  });

  it("test text secondaryText rendered on screen with custom props", () => {
    render(<MainText {...mockProps} secondaryText="IDN Media Creator" />);
    const text = screen.getByText(/IDN Media Creator/i);
    expect(text).toBeInTheDocument();
  });

  // optional checker and need query by text becouse that not rendered
  it("test text secondaryText wrong rendered on screen", () => {
    render(<MainText {...mockProps} />);
    const text = screen.queryByText(/IDN Media Creator test/i);
    expect(text).not.toBeInTheDocument();
  });
});
