import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import { MemoryRouter } from "react-router-dom";

describe("<OrgButton/>", () => {
  it("should render button with the correct label", () => {
    render(
      <MemoryRouter>
        <Button path="/oddaj-rzeczy">Oddaj Rzeczy</Button>
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: "Oddaj Rzeczy" });
    expect(button).toBeInTheDocument();
  });
});
