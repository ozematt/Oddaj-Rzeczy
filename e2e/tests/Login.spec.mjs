import { test, expect } from "@playwright/test";

test.describe("Login flow", () => {
  test("Go to login page, submit form with valid data and verify redirection", async ({
    page,
  }) => {
    await page.goto("/");

    const loginButton = page.getByRole("button", { name: "Zaloguj" });
    await loginButton.click();

    const emailInput = page.getByRole("textbox", { name: "Email" });
    const passwordInput = page.getByRole("textbox", { name: "Hasło" });

    await emailInput.fill("neutralnie7@gmail.com");
    await passwordInput.fill("111111");
    await page.getByRole("button", { name: "Zaloguj się" }).click();

    await expect(page.getByText("Cześć, neutralnie7@gmail.com")).toBeVisible();
  });
});
