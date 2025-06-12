import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../index";

describe("SearchBar", () => {
  it("renders button", () => {
    render(<Button title={"Test"} onClick={() => {}} />);

    const searchInput = screen.getByText("Test");
    expect(searchInput).toBeInTheDocument();
  });
});
