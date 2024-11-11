import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageNumber } from "../components/PageNumber";

describe("<PageNumber />", () => {
  it("should render li with correct label and with class 'active'", () => {
    const onPageChange = vi.fn();
    render(
      <PageNumber
        page={1}
        currentPage={1}
        pages={[3]}
        onPageChange={onPageChange}
      />
    );

    const liElement = screen.getByText("1");
    expect(liElement).toHaveClass("active");
  });
  it("should render li with correct label and with class 'hidden' when page and current page didn't match", () => {
    const onPageChange = vi.fn();
    render(
      <PageNumber
        page={2}
        currentPage={1}
        pages={[3]}
        onPageChange={onPageChange}
      />
    );

    const liElement = screen.getByText("2");
    expect(liElement).toHaveClass("hidden");
  });
});
