/* eslint-disable testing-library/no-debugging-utils */

import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Search, SearchComponent } from "../SearchComponent";

describe("App", () => {
  it("checks for an element by text", async () => {
    render(<SearchComponent />);
    expect(screen.getByText(/Search:/)).toBeInTheDocument();
  });

  it("checks for an element by label text", () => {
    render(<SearchComponent />);
    // screen.debug();
    // console.log(screen.getByLabelText("Search:"));
    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
  });

  it("renders some async data", async () => {
    render(<SearchComponent />);
    screen.debug();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    await screen.findByText(/Signed in as/);
    screen.debug();
  });

  it("entering text in textbox", async () => {
    render(<SearchComponent />);
    screen.debug();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    await waitFor(() => {
      expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
    });

    screen.debug();
    // expect DisplayValue
  });

  it("calls the onChange callback handler", () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
