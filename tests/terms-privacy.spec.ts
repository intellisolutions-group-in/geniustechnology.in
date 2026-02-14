/**
 * Terms & Privacy Pages Test Suite
 * Tests: /terms, /privacy - load, navigation, links
 * Run: npx playwright test tests/terms-privacy.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.setTimeout(60000);

test.describe("Terms of Service Page (/terms)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/terms`, { waitUntil: "domcontentloaded" });
  });

  test("1. Page loads correctly and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/terms/);
    await expect(page.getByRole("heading", { name: "Terms of Service" })).toBeVisible();
    await page.screenshot({ path: "test-results/terms-privacy/01-terms.png", fullPage: true });
  });

  test("2. Page content is visible", async ({ page }) => {
    await expect(page.getByText("Acceptance of Terms")).toBeVisible();
    await expect(page.getByText("Contact Information")).toBeVisible();
  });

  test("3. Header - Logo navigates to home", async ({ page }) => {
    await page.getByRole("link", { name: /Genius Technology Logo/i }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("4. Header - Contact CTA works", async ({ page }) => {
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("5. Footer - Privacy Policy link navigates to /privacy", async ({ page }) => {
    await page.getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL(/\/privacy/);
  });

  test("6. Footer - Terms of Service link stays on /terms", async ({ page }) => {
    await page.getByRole("link", { name: "Terms of Service" }).click();
    await expect(page).toHaveURL(/\/terms/);
  });
});

test.describe("Privacy Policy Page (/privacy)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/privacy`, { waitUntil: "domcontentloaded" });
  });

  test("7. Page loads correctly and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/privacy/);
    await expect(page.getByRole("heading", { name: "Privacy Policy" })).toBeVisible();
    await page.screenshot({ path: "test-results/terms-privacy/07-privacy.png", fullPage: true });
  });

  test("8. Page content is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "2. Information We Collect" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "11. Contact Information" })).toBeVisible();
  });

  test("9. Header - Home link works", async ({ page }) => {
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("10. Footer - Privacy Policy link stays on /privacy", async ({ page }) => {
    await page.getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL(/\/privacy/);
  });

  test("11. Footer - Terms of Service link navigates to /terms", async ({ page }) => {
    await page.getByRole("link", { name: "Terms of Service" }).click();
    await expect(page).toHaveURL(/\/terms/);
  });
});

test.describe("Terms & Privacy - No console errors", () => {
  test("12. No console errors on /terms", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/terms`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });

  test("13. No console errors on /privacy", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/privacy`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });
});
