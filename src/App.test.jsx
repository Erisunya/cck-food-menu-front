import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders website name in navigation bar", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "CCK Food Menu" }).textContent
    ).toMatch(/CCK Food Menu/i);
  });

  it("renders links in navigation bar", async () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Feedback" }).textContent
    ).toMatch(/Feedback/i);

    expect(screen.getByRole("heading", { name: "Menus" }).textContent).toMatch(
      /Menus/i
    );
  });
});
