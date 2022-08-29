import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/layout/Header";

const mockProps = {
  detailData: {
    isLoading: false,
    isError: false,
    data: {
      image: "https://i.ytimg.com/vi/1cOzBSD5-rM/hqdefault.jpg",
      fullname: "John Doe",
      followers: 2123,
      following: 93847,
      about:
        "Commodi natus error quos quo quisquam qui. Enim cumque non et est deserunt labore perspiciatis.",
    },
  },
};

describe("tests components Header", () => {
  // Handle error : TypeError: window.matchMedia is not a function
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => ({
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  it("Perform snapshots test Header", () => {
    const inputDefaultTree = render(<Header {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text fullname wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.getByText(/John Doe/i);
    expect(label).toBeInTheDocument();
  });

  it("test text fullname wrong rendered on screen with custom props", () => {
    render(
      <Header
        detailData={{
          ...mockProps.detailData,
          data: { ...mockProps.detailData.data, fullname: "IDN Media Admin" },
        }}
      />
    );
    const label = screen.getByText(/IDN Media Admin/i);
    expect(label).toBeInTheDocument();
  });

  it("test text fullname wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.queryByText(/AJohns Doess/i);
    expect(label).not.toBeInTheDocument();
  });

  it("test text followers wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.getByText(/2123/i);
    expect(label).toBeInTheDocument();
  });

  it("test text followers wrong rendered on screen with custom props", () => {
    render(
      <Header
        detailData={{
          ...mockProps.detailData,
          data: { ...mockProps.detailData.data, followers: 1213 },
        }}
      />
    );
    const label = screen.getByText(/1213/i);
    expect(label).toBeInTheDocument();
  });

  it("test text followers wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.queryByText(/562344/i);
    expect(label).not.toBeInTheDocument();
  });

  it("test text following wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.getByText(/93847/i);
    expect(label).toBeInTheDocument();
  });

  it("test text following wrong rendered on screen with custom props", () => {
    render(
      <Header
        detailData={{
          ...mockProps.detailData,
          data: { ...mockProps.detailData.data, following: 1213 },
        }}
      />
    );
    const label = screen.getByText(/1213/i);
    expect(label).toBeInTheDocument();
  });

  it("test text following wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.queryByText(/362344/i);
    expect(label).not.toBeInTheDocument();
  });

  it("test text about wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.getByText(
      /Commodi natus error quos quo quisquam qui. Enim cumque non et est deserunt labore perspiciatis./i
    );
    expect(label).toBeInTheDocument();
  });

  it("test text about wrong rendered on screen with custom props", () => {
    render(
      <Header
        detailData={{
          ...mockProps.detailData,
          data: {
            ...mockProps.detailData.data,
            about: "IDN Media description",
          },
        }}
      />
    );
    const label = screen.getByText(/IDN Media description/i);
    expect(label).toBeInTheDocument();
  });

  it("test text about wrong rendered on screen", () => {
    render(<Header {...mockProps} />);
    const label = screen.queryByText(/!!IDNMedia !description~/i);
    expect(label).not.toBeInTheDocument();
  });
});
