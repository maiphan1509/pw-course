import { expect, Page, test } from "@playwright/test";

test("Add and remove todo", async ({ page }) => {
  await test.step("1. Go to the todo page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.click("text=Bài học 3: Todo Page");
  });

  await test.step("2. Add 100 todos and remove odd todos", async () => {
    await addTodo(page, "Todo", 100);
  });
  await test.step("3. Remove odd todos", async () => {
    await removeOddTodo(page, "Todo");
  });

  await expect(page.locator('li:has-text("Todo")')).toHaveCount(50);
});

// Functions ⬇

const addTodo = async (page: Page, todo: string, quantity: number) => {
  for (let i = 0; i < quantity; i++) {
    await page.locator('input[id="new-task"]').fill(`${todo} ${i + 1}`);
    await page.locator('button:has-text("Add Task")').click();
  }
};

const removeOddTodo = async (page: Page, todo: string) => {
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
