import { expect, Page, test } from "@playwright/test";
import { dataNote } from "./data-note";

test("Add notes and search", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.click("text=Bài học 4: Personal notes");

  for (const note of dataNote) {
    await addNotes(page, note.action, note.description);
  }

  await page.locator('input[id="search"]').fill("một hoặc nhiều");

  const expectedCount = countOccurrences(dataNote, "một hoặc nhiều");
  await expect(page.locator("li")).toHaveCount(expectedCount);
  await expect(
    page.getByText(`Total Notes: ${expectedCount}`, { exact: true }),
  ).toBeVisible();
});

const addNotes = async (page: Page, title: string, content: string) => {
  await page.locator('input[id="note-title"]').fill(title);
  await page.locator('textarea[id="note-content"]').fill(content);
  await page.locator('button:has-text("Add Note")').click();
};

function countOccurrences(notes: typeof dataNote, phrase: string): number {
  let count = 0;

  for (const note of notes) {
    const regex = new RegExp(phrase, "gi");

    const actionMatches = note.action.match(regex);
    const descriptionMatches = note.description.match(regex);

    count += actionMatches ? actionMatches.length : 0;
    count += descriptionMatches ? descriptionMatches.length : 0;
  }

  return count;
}
