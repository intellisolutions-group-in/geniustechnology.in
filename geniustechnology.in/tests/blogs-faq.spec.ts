/**
 * Blogs & FAQ Pages Test Suite
 * Tests: /blogs (post cards, category filter, CTAs), /faq (accordion, buttons)
 * Run: npx playwright test tests/blogs-faq.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.describe("Blogs Page (/blogs)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/blogs`, { waitUntil: "domcontentloaded" });
  });

  test("1. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/blogs/);
    await page.screenshot({ path: "test-results/blogs-faq/01-blogs.png", fullPage: true });
  });

  test("2. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("3. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("4. Featured post - Read Article navigates to blog post", async ({ page }) => {
    await page.getByRole("link", { name: "Read Article" }).click();
    await expect(page).toHaveURL(/\/blogs\/future-ai-enterprise-software-development/);
  });

  test("5. Blog post card navigates to post", async ({ page }) => {
    const card = page.locator('a[href="/blogs/cloud-migration-strategies-legacy-systems"]');
    await card.scrollIntoViewIfNeeded();
    await card.click();
    await expect(page).toHaveURL(/\/blogs\/cloud-migration-strategies-legacy-systems/);
  });

  test("6. Category filter - Artificial Intelligence filters posts", async ({ page }) => {
    await page.getByRole("button", { name: /Artificial Intelligence/ }).click();
    await expect(page.getByText("Showing: Artificial Intelligence")).toBeVisible();
    await expect(page.locator('a[href="/blogs/future-ai-enterprise-software-development"]')).toHaveCount(2);
    await expect(page.locator('a[href="/blogs/cloud-migration-strategies-legacy-systems"]')).toHaveCount(0);
  });

  test("7. Category filter - Clear filter resets to All Posts", async ({ page }) => {
    await page.getByRole("button", { name: /Web Development/ }).click();
    await expect(page.getByText("Showing: Web Development")).toBeVisible();
    await page.getByRole("button", { name: "Clear filter" }).click();
    await expect(page.getByText("Showing:")).not.toBeVisible();
    await expect(page.locator('a[href="/blogs/future-ai-enterprise-software-development"]')).toHaveCount(2);
  });

  test("8. CTA - Get in Touch navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get in Touch" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("9. All Posts shows multiple blog cards", async ({ page }) => {
    const postLinks = page.locator('a[href^="/blogs/"]');
    await expect(postLinks.first()).toBeVisible();
    await expect(postLinks).toHaveCount(7);
  });
});

test.describe("FAQ Page (/faq)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/faq`, { waitUntil: "domcontentloaded" });
  });

  test("10. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/faq/);
    await page.screenshot({ path: "test-results/blogs-faq/10-faq.png", fullPage: true });
  });

  test("11. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("12. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("13. FAQ accordion - expand shows answer", async ({ page }) => {
    const firstQuestion = page.getByText("What services does Genius Technology provide?").first();
    await firstQuestion.click();
    await expect(page.getByText("Genius Technology provides end-to-end IT services including web development")).toBeVisible();
  });

  test("14. FAQ accordion - collapse hides answer", async ({ page }) => {
    const firstQuestion = page.getByText("What services does Genius Technology provide?").first();
    await firstQuestion.click();
    await expect(page.getByText("Genius Technology provides end-to-end IT services")).toBeVisible();
    await firstQuestion.click();
    await expect(page.getByText("Genius Technology provides end-to-end IT services")).not.toBeVisible();
  });

  test("15. Multiple FAQ items can be expanded", async ({ page }) => {
    await page.getByText("What services does Genius Technology provide?").first().click();
    await page.getByText("Where is Genius Technology located?").first().click();
    await expect(page.getByText("Our headquarters is located in Vadodara")).toBeVisible();
    await expect(page.getByText("Genius Technology provides end-to-end IT services")).toBeVisible();
  });
});

test.describe("Blogs & FAQ - No console errors", () => {
  test("16. No console errors on /blogs", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/blogs`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });

  test("17. No console errors on /faq", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/faq`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });
});
