import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  const setToggle = jest.fn();
  render(<Button btnTxt="Click me" setToggle={setToggle} />);
  const button = screen.getByTestId("button");

  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  test("Button Text", () => {
    expect(button).toHaveTextContent("Click Me!");
  });
});
