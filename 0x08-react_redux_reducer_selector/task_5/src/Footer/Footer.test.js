import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer Component", () => {
  it("should render without crashing", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Copyright/i); // Check for a text that starts with "Copyright"
    expect(footerElement).toBeInTheDocument();
  });

  it("should render the correct copyright text", () => {
    render(<Footer />);
    const expectedText = `Copyright ${getFullYear()} - ${getFooterCopy()}`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
