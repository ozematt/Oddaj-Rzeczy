import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .getByRole("navigation")
    .getByText("Fundacja i organizacje")
    .click();
  await page.getByRole("button", { name: "Fundacjom" }).click();
  await page.getByText("Fundacja “Dbam o Zdrowie”").click();
  await page.getByText("W naszej bazie znajdziesz").click();

  await page.getByRole("button", { name: "Organizacjom pozarządowym" }).click();
  await page.getByText("Organizacja “Lorem Ipsum 1”").click();
  await page.getByRole("button", { name: "Lokalnym zbiórkom" }).click();
  await page.getByText("Zbiórka “Lorem Ipsum 1”").click();
  await page.getByRole("navigation").getByText("Kontakt").click();
  await page.getByPlaceholder("Krzysztof").click();
  await page.getByPlaceholder("Krzysztof").fill("Matt");
  await page.getByPlaceholder("abc@xyz.pl").click();
  await page.getByPlaceholder("abc@xyz.pl").fill("mail@gamil.com");
  await page.getByPlaceholder("Lorem ipsum dolor sit amet,").click();
  await page
    .getByPlaceholder("Lorem ipsum dolor sit amet,")
    .fill(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  await page.getByRole("button", { name: "Wyślij" }).click();
  await page.getByText("Wiadomość została wysłana!").click();
  await page.getByPlaceholder("Krzysztof").click();
  await page.getByPlaceholder("Krzysztof").fill("sds");
  await page.getByPlaceholder("abc@xyz.pl").click();
  await page.getByPlaceholder("abc@xyz.pl").fill("sss");
  await page.getByPlaceholder("Lorem ipsum dolor sit amet,").click();
  await page.getByPlaceholder("Lorem ipsum dolor sit amet,").fill("s");
  await page.getByRole("button", { name: "Wyślij" }).click();
  await page.getByPlaceholder("abc@xyz.pl").click();
  await page.getByPlaceholder("abc@xyz.pl").fill("sss@gamil.com");
  await page.getByRole("button", { name: "Wyślij" }).click();
  await page.getByText("Wiadomość musi mieć").click();
  await page.getByPlaceholder("Krzysztof").click();
  await page.getByPlaceholder("Krzysztof").fill("s");
  await page.getByRole("button", { name: "Wyślij" }).click();
  await page.getByPlaceholder("Krzysztof").click();
  await page.getByPlaceholder("Krzysztof").fill("");
  await page.getByPlaceholder("abc@xyz.pl").click();
  await page.getByPlaceholder("abc@xyz.pl").click();
  await page.getByPlaceholder("abc@xyz.pl").fill("");
  await page.getByRole("button", { name: "Wyślij" }).click();
  await page.getByText("Podane imię jest nieprawidł").click();
  await page.getByText("Podany email jest nieprawidł").click();
});
