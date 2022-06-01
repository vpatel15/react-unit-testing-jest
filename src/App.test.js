import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import App from "./index";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});

describe("App Component", () => {
  // Test 1
  test("App Rendering", () => {
    render(<App />); // Rendering the App
    const text = screen.getByTestId("text");
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  // Test 2
  test("Default Text", () => {
    render(<App />);
    const text = screen.getByTestId("text");
    expect(text).toHaveTextContent("GeeksForGeeks");
  });

  // Test 3
  test("Toggling Text", () => {
    render(<App />);
    const text = screen.getByTestId("text");
    const button = screen.getByTestId("button");
    expect(text).toHaveTextContent("GeeksForGeeks");
    fireEvent.click(button);
    expect(text).toBeEmptyDOMElement();
    fireEvent.click(button);
    expect(text).toHaveTextContent("GeeksForGeeks");
  });
});
