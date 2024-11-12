import { test, expect } from "@playwright/test";

test.describe("Form submit flow", () => {
  test("should submit data after filling out the form correctly", async ({
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

    await page
      .getByRole("main")
      .getByRole("button", { name: "ODDAJ RZECZY" })
      .click();
    await page.getByRole("radio").first().check();
    await page.getByRole("button", { name: "Dalej" }).click();
    await page.locator(".option-arrow_down").click();
    await page.locator("div").filter({ hasText: /^2$/ }).click();
    await page.getByRole("button", { name: "Dalej" }).click();
    await page.locator(".option-arrow_down").click();
    await page.getByText("Poznań").click();
    await page.getByText("dzieciom").click();
    await page.getByText("samotnym matkom").click();
    await page
      .locator("form")
      .filter({ hasText: "Krok 3/4Lokalizacja:Poznań" })
      .getByRole("textbox")
      .fill("Caritas");
    await page.getByRole("button", { name: "Dalej" }).click();
    await page.getByLabel("Ulica").fill("Sunny");
    await page.getByLabel("Miasto").fill("Warsaw");
    await page.getByLabel("Kod pocztowy").fill("20-200");
    await page.getByLabel("Numer telefonu").fill("123456789");
    await page.getByPlaceholder(" DD.MM.YYYY").fill("20.12.2024");
    await page.getByPlaceholder(" HH:MM").fill("12:00");
    await page.getByLabel("Uwagi dla kuriera").fill("brak");
    await page.getByRole("button", { name: "Dalej" }).click();
    await expect(page.getByText("2 worki, ubrania, które nadaj")).toBeVisible();
    await expect(page.getByText("dla lokalizacji: Poznań,")).toBeVisible();
    await expect(
      page.getByText(
        "Ulica:Miasto:Kod pocztowy: Numer telefonu: SunnyWarsaw20-"
      )
    ).toBeVisible();
    await expect(
      page.getByText("Data:Godzina:Uwagi dla kuriera 20.12.202412:00brak")
    ).toBeVisible();

    await page.getByRole("button", { name: "Potwierdzam" }).click();
    await expect(page.getByText("Dziękujemy za przesłanie")).toBeVisible();
  });
});
