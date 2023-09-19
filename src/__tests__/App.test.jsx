import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  it("renders correct links in navigation bar", async () => {
    render(<App />);

    let feedbackLink = screen.getByRole("heading", { name: "Feedback" });
    await userEvent.click(feedbackLink);
    expect(screen.getByText("Leave your feedback here!").textContent).toMatch(
      /Leave your feedback here!/i
    );

    let menusLink = screen.getByRole("heading", { name: "CCK Menus" });
    await userEvent.click(menusLink);
    expect(
      screen.getByRole("heading", { name: "Test Place Mock" }).textContent
    ).toMatch(/Test Place Mock/i);
  });
});
