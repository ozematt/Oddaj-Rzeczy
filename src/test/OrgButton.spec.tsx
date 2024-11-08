import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { OrgButton } from "../components/OrgButton";
import userEvent from "@testing-library/user-event";

describe("<OrgButton/>", () => {
  it("", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <OrgButton
        activeButton="Fundacjom"
        children="Fundacjom"
        onClick={onClick}
      />
    );
    const button = screen.getByRole("button", { name: "Fundacjom" });
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("active-btn");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
