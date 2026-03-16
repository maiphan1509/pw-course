import { expect, Page, test } from "@playwright/test";

test("Register Page Test", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");

  await page.click("text=Bài học 1: Register Page");

  await page.locator('input[id="username"]').fill("Mai Phan");

  await page.locator('input[id="email"]').fill("mai.phan@example.com");

  await page.locator('input[id="female"]').click();

  await page.locator('input[id="reading"]').click();
  await page.locator('input[id="cooking"]').click();
  await page.locator('input[id="traveling"]').click();

  await page.locator('select[id="interests"]').selectOption("art");

  await page.locator('select[id="country"]').selectOption("uk");

  await page.locator('input[id="dob"]').fill("1999-09-15");

  await page
    .locator('input[id="profile"]')
    .setInputFiles("tests/lesson-05/01-dom.txt");

  await page.locator('textarea[id="bio"]').fill("This is a test message.");

  await page.locator('input[id="rating"]').fill("4");

  await page.locator('input[type="color"]').fill("#000604");

  await page.locator('div[class="tooltip"]').hover();
  await page.locator('input[id="newsletter"]').click();

  await page.locator('label[class="switch"]').click();

  await rateStar(page, 4.5);

  await page.locator('button[type="submit"]').click();

  await expect(page.locator("#userTable tbody tr")).toHaveCount(1);
});

const rateStar = async (page: Page, rating: number) => {
  const size = await startRatingSize(page);
  console.log(size);
  const clickX = (rating / 5) * size.width;
  const clickY = size.height / 2;

  await page
    .locator(`div[id="starRating"]`)
    .click({ position: { x: clickX, y: clickY } });
};

const startRatingSize = async (page: Page) => {
  return await page.locator(`div[id="starRating"]`).evaluate((el) => {
    return { width: el.clientWidth, height: el.clientHeight };
  });
};
