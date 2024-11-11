import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { OrgButton } from "../components/OrgButton";
import userEvent from "@testing-library/user-event";

describe("<OrgButton/>", () => {
  it("should render button with the correct label and respond to click events ", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <OrgButton activeButton="Fundacjom" onClick={onClick}>
        Fundacjom
      </OrgButton>
    );
    const button = screen.getByRole("button", { name: "Fundacjom" });
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("active-btn");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("should render button with the correct label and inactive button", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <OrgButton
        activeButton="Lokalnym zbiórkom"
        children="Fundacjom"
        onClick={onClick}
      />
    );
    const button = screen.getByRole("button", { name: "Fundacjom" });
    expect(button).toBeInTheDocument();

    expect(button).not.toHaveClass("active-btn");
  });
});
