import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  it("should render without crashing", () => {
    render(<Login />);
    const loginElement = screen.getByRole('form'); // Adjust if your component has a specific role
    expect(loginElement).toBeInTheDocument();
  });

  it("should have 2 input tags and 2 label tags", () => {
    render(<Login />);
    const labels = screen.getAllByRole('label'); // Make sure your labels have the role 'label'
    const inputs = screen.getAllByRole('textbox'); // or use screen.getAllByRole('input') if you have specific input types
    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
  });
});
