import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Zaloguj" }).click();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("neutralnie7@gmail.com");
  await page.getByLabel("Hasło").click();
  await page.getByLabel("Hasło").fill("111111");
  await page.getByRole("button", { name: "Zaloguj się" }).click();
  await page.getByText("Cześć, neutralnie7@gmail.com").click();
  await page.getByRole("button", { name: "Wyloguj" }).click();
  await page.getByRole("button", { name: "Strona główna" }).click();
});
