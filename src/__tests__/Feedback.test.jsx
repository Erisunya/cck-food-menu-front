import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Feedback from "../components/pages/Feedback";

describe("Feedback component", () => {
  it("renders feedback form correctly", () => {
    const component = render(<Feedback />);

    expect(component).toMatchSnapshot();
  });

  it("enables the submit button when form is filled out", async () => {
    render(<Feedback />);

    expect(document.querySelector("button").disabled).toBeTruthy();

    await userEvent.type(
      screen.getByRole("textbox", { name: "Name*" }),
      "Alex Lim"
    );

    expect(document.querySelector("button").disabled).toBeFalsy();
  });

  it("shows an error message when the required fields are not filled out", async () => {
    render(<Feedback />);

    await userEvent.type(
      screen.getByRole("textbox", { name: "Email" }),
      "test@email.com"
    );
    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Name is required.")).toBeVisible();
    expect(screen.getByText("Feedback is required.")).toBeVisible();
  });
});
