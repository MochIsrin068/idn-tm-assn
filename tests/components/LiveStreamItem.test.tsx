import React from "react";
import { render, screen } from "@testing-library/react";
import LiveStreamItem from "../../components/content/LiveStreamItem";

const mockProps = {
  data: {
    title: "Nyanyi-nyanyi malem enak nih",
    date: "2022-08-25",
    time: "09.10",
    category: "Music",
    thumbnail: "https://i.ytimg.com/vi/1cOzBSD5-rM/hqdefault.jpg",
    status: "Live",
    views: "10,5rb",
  },
};

describe("tests components LiveStreamItem", () => {
  it("Perform snapshots test LiveStreamItem", () => {
    const inputDefaultTree = render(<LiveStreamItem {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test background container use thambnail data", () => {
    render(<LiveStreamItem {...mockProps} />);
    const container = screen.getByTestId("live-stream-container");
    expect(container).toHaveStyle(
      `background: url(https://i.ytimg.com/vi/1cOzBSD5-rM/hqdefault.jpg)`
    );
  });

  it("test text views if isView rendered on screen", () => {
    render(<LiveStreamItem {...mockProps} />);
    const text = screen.getByText(/10,5rb/i);
    expect(text).toBeInTheDocument();
  });

  it("test text status if isView === false rendered on screen", () => {
    render(
      <LiveStreamItem data={{ ...mockProps.data, status: "terjadwal" }} />
    );
    const text = screen.getByText(/terjadwal/i);
    expect(text).toBeInTheDocument();
  });

  it("test text title rendered on screen", () => {
    render(<LiveStreamItem {...mockProps} />);
    const text = screen.getByText(/Nyanyi-nyanyi malem enak nih/i);
    expect(text).toBeInTheDocument();
  });

  it("test text category rendered on screen", () => {
    render(
      <LiveStreamItem data={{ ...mockProps.data, status: "terjadwal" }} />
    );
    const text = screen.getByText(/Music/i);
    expect(text).toBeInTheDocument();
  });

  // optional checker and need query by text becouse that not rendered
  it("test text views wrong if isView rendered on screen", () => {
    render(<LiveStreamItem {...mockProps} />);
    const text = screen.queryByText(/10,5rb test/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text status wrong if isView === false rendered on screen", () => {
    render(
      <LiveStreamItem data={{ ...mockProps.data, status: "terjadwal" }} />
    );
    const text = screen.queryByText(/terjadwal test/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text title wrong rendered on screen", () => {
    render(<LiveStreamItem {...mockProps} />);
    const text = screen.queryByText(/Nyanyi-nyanyi malem enak nih test/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text category wrong rendered on screen", () => {
    render(<LiveStreamItem {...mockProps} />);
    const text = screen.queryByText(/Music test/i);
    expect(text).not.toBeInTheDocument();
  });
});
