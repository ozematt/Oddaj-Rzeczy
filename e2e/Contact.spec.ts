import { test, expect } from "@playwright/test";

test.describe("Contact submit flow", () => {
  test("should submit contact form with valid data", async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.goto("/");
    const contactButton = page
      .getByRole("navigation")
      .locator("li")
      .filter({ hasText: "Kontakt" });
    await expect(contactButton).toBeVisible();
    await contactButton.click();

    await page.getByPlaceholder("Krzysztof").fill("Matt");
    await page.getByPlaceholder("abc@xyz.pl").fill("mail@gamil.com");
    await page
      .getByPlaceholder("Lorem ipsum dolor sit amet,")
      .fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      );

    await page.getByRole("button", { name: "Wyślij" }).click();
    await expect(page.getByText("Wiadomość została wysłana!")).toBeVisible();
  });

  test("should display error messages after submit contact form with invalid data ", async ({
    page,
  }) => {
    await page.goto("/");
    const contactButton = page
      .getByRole("navigation")
      .locator("li")
      .filter({ hasText: "Kontakt" });
    await contactButton.click();
    await page.getByPlaceholder("Krzysztof").fill("111");
    await page.getByPlaceholder("abc@xyz.pl").fill("invalid@Email");
    await page.getByPlaceholder("Lorem ipsum dolor sit amet,").fill("12345");

    await page.getByRole("button", { name: "Wyślij" }).click();

    await expect(
      page.getByText("Podane imię jest nieprawidłowe!")
    ).toBeVisible();
    await expect(
      page.getByText("Podany email jest nieprawidłowy!")
    ).toBeVisible();
    await expect(
      page.getByText("Wiadomość musi mieć conajmniej 120 znaków!")
    ).toBeVisible();
  });
});
