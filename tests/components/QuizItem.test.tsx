import React from "react";
import { render, screen } from "@testing-library/react";
import QuizItem from "../../components/content/QuizItem";

const mockProps = {
  data: {
    title: "Kuis Gambar Ini Bisa Ungkap Apa Ranan Profesimu",
    date: "2022-08-23",
    time: "09.10",
    category: "Education",
    thumbnail:
      "https://sinyalkarir.com/wp-content/uploads/2022/02/Perbedaan-Pekerjaan-dan-Profesi.webp",
    plays: "11.234",
  },
};

describe("tests components QuizItem", () => {
  it("Perform snapshots test QuizItem", () => {
    const inputDefaultTree = render(<QuizItem {...mockProps} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text category rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.getByText(/Education/i);
    expect(text).toBeInTheDocument();
  });

  it("test text title rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.getByText(
      /Kuis Gambar Ini Bisa Ungkap Apa Ranan Profesimu/i
    );
    expect(text).toBeInTheDocument();
  });

  it("test text plays values rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.getByText(/11.234/i);
    expect(text).toBeInTheDocument();
  });

  it("test text plays title rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.getByText(/Plays/i);
    expect(text).toBeInTheDocument();
  });

  // optional checker and need query by text becouse that not rendered
  it("test text category wrong rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.queryByText(/Business/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text title wrong rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.queryByText(/Kuiss Gaambar/i);
    expect(text).not.toBeInTheDocument();
  });

  it("test text plays values wrong rendered on screen", () => {
    render(<QuizItem {...mockProps} />);
    const text = screen.queryByText(/22331.1234/i);
    expect(text).not.toBeInTheDocument();
  });
});
