/**
 * Why Choose Us & Testimonials Pages Test Suite
 * Run: npx playwright test tests/why-choose-us-testimonials.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.setTimeout(60000);

test.describe("Why Choose Us (/why-choose-us)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/why-choose-us`, { waitUntil: "domcontentloaded" });
  });

  test("Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/why-choose-us/);
    await page.screenshot({ path: "test-results/why-choose-us-testimonials/01-why-choose-us.png", fullPage: true });
  });

  test("PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("CTA - Contact Us navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Contact Us" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("CTA - View Services navigates to /services", async ({ page }) => {
    await page.getByRole("link", { name: "View Services" }).first().click();
    await expect(page).toHaveURL(/\/services/);
  });
});

test.describe("Testimonials (/testimonials)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/testimonials`, { waitUntil: "domcontentloaded" });
  });

  test("Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/testimonials/);
    await page.screenshot({ path: "test-results/why-choose-us-testimonials/02-testimonials.png", fullPage: true });
  });

  test("PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("CTA - Contact Us navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Contact Us" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("CTA - View Services navigates to /services", async ({ page }) => {
    await page.getByRole("link", { name: "View Services" }).first().click();
    await expect(page).toHaveURL(/\/services/);
  });
});

test.describe("Header Navigation", () => {
  test("Header Contact works from why-choose-us", async ({ page }) => {
    await page.goto(`${BASE_URL}/why-choose-us`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("Header Contact works from testimonials", async ({ page }) => {
    await page.goto(`${BASE_URL}/testimonials`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("No console errors", () => {
  test("No console errors on /why-choose-us", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/why-choose-us`, { waitUntil: "domcontentloaded" });
    const criticalErrors = errors.filter(
      (e) => !e.includes("Extension") && !e.includes("chrome-extension")
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test("No console errors on /testimonials", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/testimonials`, { waitUntil: "domcontentloaded" });
    const criticalErrors = errors.filter(
      (e) => !e.includes("Extension") && !e.includes("chrome-extension")
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
