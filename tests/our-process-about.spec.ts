/**
 * Our Process & About Pages Test Suite
 * Tests: /our-process, /about - all buttons and CTAs
 * Run: npx playwright test tests/our-process-about.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.setTimeout(60000);

test.describe("Our Process Page (/our-process)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/our-process`, { waitUntil: "domcontentloaded" });
  });

  test("1. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/our-process/);
    await page.screenshot({ path: "test-results/our-process-about/01-our-process.png", fullPage: true });
  });

  test("2. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("3. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("4. CTA - Talk to Our Team navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Talk to Our Team" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("About Page (/about)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/about`, { waitUntil: "domcontentloaded" });
  });

  test("5. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/about/);
    await page.screenshot({ path: "test-results/our-process-about/05-about.png", fullPage: true });
  });

  test("6. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("7. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("8. CTA - Contact Us Now navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Contact Us Now" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Our Process & About - Header Navigation", () => {
  test("9. Header links work from our-process page", async ({ page }) => {
    await page.goto(`${BASE_URL}/our-process`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("10. Header links work from about page", async ({ page }) => {
    await page.goto(`${BASE_URL}/about`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "About", exact: true }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });
});

test.describe("Our Process & About - No console errors", () => {
  test("11. No console errors on /our-process", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/our-process`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });

  test("12. No console errors on /about", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/about`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });
});
