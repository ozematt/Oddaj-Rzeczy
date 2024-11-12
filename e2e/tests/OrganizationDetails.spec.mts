import { test, expect } from "@playwright/test";

test.describe("Organization details display", () => {
  test("should see information about aid organizations after clicking on a specific one ", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("navigation")
      .getByText("Fundacja i organizacje")
      .click();

    await page.getByRole("button", { name: "Fundacjom" }).click();
    await expect(page.getByText("W naszej bazie znajdziesz")).toBeVisible();
    await expect(page.getByText("Fundacja “Dbam o Zdrowie”")).toBeVisible();

    await page
      .getByRole("button", { name: "Organizacjom pozarządowym" })
      .click();
    await expect(page.getByText("Organizacja “Lorem Ipsum 1”")).toBeVisible();

    await page.getByRole("button", { name: "Lokalnym zbiórkom" }).click();
    await expect(page.getByText("Zbiórka “Lorem Ipsum 1”")).toBeVisible();
  });
});
