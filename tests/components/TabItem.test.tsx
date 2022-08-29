import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TabItem from "../../components/content/TabItem";

const mockProps = {
  label: "News",
  onChangeTab: jest.fn(),
  isActive: true,
};

describe("tests components TabItem", () => {
  it("Perform snapshots test TabItem", () => {
    const inputDefaultTree = render(<TabItem {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text label", () => {
    render(<TabItem {...mockProps} />);
    const label = screen.getByText(/News/i);
    expect(label).toBeInTheDocument();
  });

  it("test text label with custom props", () => {
    render(<TabItem {...mockProps} label="Livestream" />);
    const label = screen.getByText(/Livestream/i);
    expect(label).toBeInTheDocument();
  });

  it("test button tab should call onChangeTab callback", () => {
    const onChangeTabSpy = jest.fn();

    const { getByTestId } = render(
      <TabItem {...mockProps} onChangeTab={onChangeTabSpy} />
    );

    fireEvent.click(getByTestId("tab-button"));

    expect(onChangeTabSpy).toHaveBeenCalled();
  });
});
