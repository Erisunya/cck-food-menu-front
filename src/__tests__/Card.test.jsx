import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Card from "../components/layout/Card";

describe("Card component", () => {
  it("renders Card with correct title", () => {
    render(
      <MemoryRouter>
        <Card title="Test Place Mock" />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: "Test Place Mock" }).textContent
    ).toMatch(/Test Place Mock/i);
  });

  it("renders Card with correct image", async () => {
    render(
      <MemoryRouter>
        <Card title="Test Place Mock" image="Test Place Mock Image" />
      </MemoryRouter>
    );

    let image = screen.getByRole("img");
    console.log(image.src);
    expect(image.src).toContain("Test%20Place%20Mock%20Image");
  });
});
