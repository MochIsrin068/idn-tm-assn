import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/index";

// mock data lib to handle error SyntaxError: Cannot use import statement outside a module
jest.mock("../../lib/news", () => ({
  getSortedNewsData: jest.fn(),
  getAllNewsIds: jest.fn(),
  getNewsData: jest.fn(),
}));

jest.mock("../../lib/liveStream", () => ({
  getSortedliveStreamData: jest.fn(),
  getAllliveStreamIds: jest.fn(),
  getliveStreamData: jest.fn(),
}));

jest.mock("../../lib/quiz", () => ({
  getSortedquizData: jest.fn(),
  getAllquizIds: jest.fn(),
  getquizData: jest.fn(),
}));

const mockParams = {
  allNewsData: [
    {
      id: "news-0011",
      title: "Ini Kunci untuk Terjun ke NFT, Jangan Asal Ikut-Ikutan!",
      date: "2022-08-25",
      time: "09.10",
      category: "Bisnis",
      thumbnail:
        "https://cdn.eraspace.com/pub/media/mageplaza/blog/post/c/a/cara-membuat-nft.jpg",
    },
  ],
  allLiveStreamData: [
    {
      id: "livestream-0011",
      title: "Nyanyi-nyanyi malem enak nih",
      date: "2022-08-25",
      time: "09.10",
      category: "Music",
      thumbnail: "https://i.ytimg.com/vi/1cOzBSD5-rM/hqdefault.jpg",
      status: "Live",
      views: "10,5rb",
    },
  ],
  allQuizsData: [
    {
      id: "quizs-0011",
      title: "Kuis Gambar Ini Bisa Ungkap Apa Ranan Profesimu",
      date: "2022-08-23",
      time: "09.10",
      category: "Education",
      thumbnail:
        "https://sinyalkarir.com/wp-content/uploads/2022/02/Perbedaan-Pekerjaan-dan-Profesi.webp",
      plays: "11.234",
    },
  ],
};

describe("tests entry pages HomePage", () => {
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

  it("Perform snapshots test HomePage", () => {
    const inputDefaultTree = render(<HomePage {...mockParams} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test text tab Berita", () => {
    render(<HomePage {...mockParams} />);
    const label = screen.getByText(/Berita/i);
    expect(label).toBeInTheDocument();
  });

  it("test text tab Livestream", () => {
    render(<HomePage {...mockParams} />);
    const label = screen.getByText(/Livestream/i);
    expect(label).toBeInTheDocument();
  });

  it("test text tab Quiz", () => {
    render(<HomePage {...mockParams} />);
    const label = screen.getByText(/Quiz/i);
    expect(label).toBeInTheDocument();
  });
});
