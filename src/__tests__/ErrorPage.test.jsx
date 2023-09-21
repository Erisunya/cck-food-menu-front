import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import ErrorPage from "../components/pages/ErrorPage";

describe("ErrorPage component", () => {
  it("renders error page correctly", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch(
      /Oops! It seems like this page doesn't exist./i
    );
  });
});
