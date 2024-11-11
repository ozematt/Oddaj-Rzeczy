import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemToShow } from "../components/ItemToShow";

const element = {
  id: "1",
  name: "John",
  purpose: "give away",
  collected: "toy, clothes",
};

describe("<ItemToShow/>", () => {
  it("should render with correct labels", () => {
    render(<ItemToShow element={element} />);

    const name = screen.getByText("John");
    const purpose = screen.getByText("give away");
    const collected = screen.getByText("toy, clothes");

    expect(name).toBeInTheDocument();
    expect(purpose).toBeInTheDocument();
    expect(collected).toBeInTheDocument();
  });
});
