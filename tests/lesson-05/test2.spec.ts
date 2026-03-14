import { expect, Page, test } from "@playwright/test";

test("Add product", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.click("text=Bài học 2: Product Page");

  await addToCart(page, "Product 1", 2);
  await addToCart(page, "Product 2", 3);
  await addToCart(page, "Product 3", 1);

  const quantityIndex = await getColumnIndex(page, "Quantity");

  await expect(
    page.locator(`tr:has-text("Product 1") td:nth-child(${quantityIndex})`),
  ).toHaveText("2");
  await expect(
    page.locator(`tr:has-text("Product 2") td:nth-child(${quantityIndex})`),
  ).toHaveText("3");
  await expect(
    page.locator(`tr:has-text("Product 3") td:nth-child(${quantityIndex})`),
  ).toHaveText("1");
});

const addToCart = async (page: Page, product: string, quantity: number) => {
  const productLocator = page.locator(
    `div:has-text("${product}") ~ button:has-text("Add to Cart")`,
  );
  for (let i = 0; i < quantity; i++) {
    await productLocator.click();
  }
};

async function getColumnIndex(page: Page, text: string): Promise<number> {
  return await page
    .locator(`th:has-text("${text}")`)
    .evaluate(
      (th: HTMLElement) =>
        Array.from(th.parentElement!.children).indexOf(th) + 1,
    );
}
