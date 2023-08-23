import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter component tests", () => {
  it("renders Counter component", () => {
    render(<Counter />); // gets appended to document.body
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(screen.getByText(/Enter input \(Default 1\)/)).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();

    fireEvent.click(screen.getByText("+"));

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
