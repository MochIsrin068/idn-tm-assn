import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationMenu from "../../components/layout/NavigationMenu";

describe("tests components NavigationMenu", () => {
  it("Perform snapshots test NavigationMenu", () => {
    const inputDefaultTree = render(
      <NavigationMenu>
        <div>IDN Media - News</div>
      </NavigationMenu>
    );
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text if have a childrenn", () => {
    render(
      <NavigationMenu>
        <div>IDN Media - News</div>
      </NavigationMenu>
    );
    const label = screen.getByText(/IDN Media - News/i);
    expect(label).toBeInTheDocument();
  });

  it("test should not have text of children", () => {
    render(<NavigationMenu />);
    const label = screen.queryByText(/IDN Media - News/i);
    expect(label).not.toBeInTheDocument();
  });
});
