import { expect, Page, test } from "@playwright/test";

test("Add and remove todo", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.click("text=Bài học 3: Todo Page");

  await addTodo(page, "Todo", 100);
  await removeEvenTodo(page, "Todo");

  await expect(page.locator('li:has-text("Todo")')).toHaveCount(50);
});

const addTodo = async (page: Page, todo: string, quantity: number) => {
  for (let i = 0; i < quantity; i++) {
    await page.locator('input[id="new-task"]').fill(`${todo} ${i + 1}`);
    await page.locator('button:has-text("Add Task")').click();
  }
};

const removeEvenTodo = async (page: Page, todo: string) => {
  const todoItems = page.locator(`li:has-text("${todo}")`);
  const count: number = await todoItems.count();

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });

  for (let i: number = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      const row = page.locator("li", {
        has: page.getByText(`${todo} ${i}`, { exact: true }),
      });

      await row.getByRole("button", { name: "Delete" }).click();
    }
  }
};
