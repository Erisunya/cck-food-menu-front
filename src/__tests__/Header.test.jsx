import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "../components/layout/Header";

describe("Header component", () => {
  it("renders website name in navigation bar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: "CCK Menus" }).textContent
    ).toMatch(/CCK Menus/i);
  });

  it("renders website logo in navigation bar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    let image = screen.getByRole("img");
    expect(image.src).toContain("/src/assets/logo.jpg");
  });
});
