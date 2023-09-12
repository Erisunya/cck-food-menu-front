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

  it("renders correct links in navigation bar", async () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Feedback" }).textContent
    ).toMatch(/Feedback/i);
    let feedbackButton = screen.getByRole("heading", { name: "Feedback" });
    await userEvent.click(feedbackButton);
    expect(
      screen.getByRole("heading", { name: "Feedback Form" }).textContent
    ).toMatch(/Feedback Form/i);

    expect(screen.getByRole("heading", { name: "Menus" }).textContent).toMatch(
      /Menus/i
    );
    let menusButton = screen.getByRole("heading", { name: "Menus" });
    await userEvent.click(menusButton);
    expect(
      screen.getByRole("heading", { name: "Test Place 1" }).textContent
    ).toMatch(/Test Place 1/i);
  });
});
