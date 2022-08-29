import React from "react";
import { render, screen } from "@testing-library/react";
import NewsItem from "../../components/content/NewsItem";

const mockProps = {
  data: {
    title: "Ini Kunci untuk Terjun ke NFT, Jangan Asal Ikut-Ikutan!",
    date: "2022-08-25",
    time: "09.10",
    category: "Bisnis",
    thumbnail:
      "https://cdn.eraspace.com/pub/media/mageplaza/blog/post/c/a/cara-membuat-nft.jpg",
  },
};

describe("tests components NewsItem", () => {
  it("Perform snapshots test NewsItem", () => {
    const inputDefaultTree = render(<NewsItem {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text dates rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.getByText(/August 25, 2022/i);
    expect(text).toBeInTheDocument();
  });

  it("test text times rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.getByText(/, 09.10/i);
    expect(text).toBeInTheDocument();
  });

  it("test text title rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.getByText(
      /Ini Kunci untuk Terjun ke NFT, Jangan Asal Ikut-Ikutan!/i
    );
    expect(text).toBeInTheDocument();
  });

  it("test background container thambnail", () => {
    render(<NewsItem {...mockProps} />);
    const container = screen.getByTestId("news-thumbnail-container");
    expect(container).toHaveStyle(
      `background: url(https://cdn.eraspace.com/pub/media/mageplaza/blog/post/c/a/cara-membuat-nft.jpg)`
    );
  });

  it("test text category rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.getByText(/Bisnis/i);
    expect(text).toBeInTheDocument();
  });

  // optional checker and need query by text becouse that not rendered
  it("test text dates wrong rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.queryByText(/August 28, 2022/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text times rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.queryByText(/, 19.11/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text title wrong rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.queryByText(/bahaya nft/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text category wrong rendered on screen", () => {
    render(<NewsItem {...mockProps} />);
    const text = screen.queryByText(/Health/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test wrong background container thambnail", () => {
    render(<NewsItem {...mockProps} />);
    const container = screen.getByTestId("news-thumbnail-container");
    expect(container).not.toHaveStyle(
      `background: url(https://idn-media-bg123.jpg)`
    );
  });
});
