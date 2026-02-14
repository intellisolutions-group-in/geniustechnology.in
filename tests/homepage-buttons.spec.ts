/**
 * Homepage Button & Link Test Suite
 * Run: npx playwright test tests/homepage-buttons.spec.ts
 * With UI: npx playwright test tests/homepage-buttons.spec.ts --ui
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.describe("Homepage Button Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Capture console errors
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(BASE_URL, { waitUntil: "networkidle" });
  });

  test("1. Homepage loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(BASE_URL);
    await page.screenshot({ path: "test-results/01-homepage-initial.png", fullPage: true });
  });

  test("2. Hero - Get in touch navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get in touch" }).click();
    await expect(page).toHaveURL(/\/contact/);
    await page.screenshot({ path: "test-results/02-hero-get-in-touch.png" });
  });

  test("3. Hero - Explore services navigates to /services", async ({ page }) => {
    await page.locator("#hero").getByRole("link", { name: "Explore services" }).click();
    await expect(page).toHaveURL(/\/services/);
    await page.screenshot({ path: "test-results/03-hero-explore-services.png" });
  });

  test("4. Header - Logo navigates to home", async ({ page }) => {
    await page.getByRole("link", { name: /Genius Technology Logo/i }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("5. Header - Home link navigates to home", async ({ page }) => {
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("6. Header - About link navigates to /about", async ({ page }) => {
    await page.getByRole("link", { name: "About", exact: true }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });

  test("7. Header - Portfolio link navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Portfolio", exact: true }).first().click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("8. Header - Careers link navigates to /careers", async ({ page }) => {
    await page.getByRole("link", { name: "Careers", exact: true }).first().click();
    await expect(page).toHaveURL(/\/careers/);
  });

  test("9. Header - Blogs link navigates to /blogs", async ({ page }) => {
    await page.getByRole("link", { name: "Blogs", exact: true }).first().click();
    await expect(page).toHaveURL(/\/blogs/);
  });

  test("10. Header - Contact CTA navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("11. Services mega menu - Web Development link", async ({ page }) => {
    await page.getByRole("link", { name: "Services" }).first().hover();
    await page.getByRole("link", { name: "Web Development" }).first().click();
    await expect(page).toHaveURL(/\/services\/web-development/);
    await page.screenshot({ path: "test-results/11-services-mega.png" });
  });

  test("12. About section - Learn more about us", async ({ page }) => {
    await page.getByRole("link", { name: "Learn more about us" }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test("13. Services section - View all services", async ({ page }) => {
    await page.getByRole("link", { name: "View all services" }).first().click();
    await expect(page).toHaveURL(/\/services/);
  });

  test("14. Portfolio section - View full portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "View full portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("15. Contact CTA - Contact Us button", async ({ page }) => {
    await page.getByRole("link", { name: "Contact Us" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("16. Contact CTA - Explore Services button", async ({ page }) => {
    await page.getByRole("link", { name: "Explore Services" }).last().click();
    await expect(page).toHaveURL(/\/services/);
  });

  test("17. FAQ accordion - expand/collapse works", async ({ page }) => {
    const firstQuestion = page.getByText("What services does Genius Technology provide?").first();
    await firstQuestion.click();
    await expect(page.getByText("We provide end-to-end IT services including web development")).toBeVisible();
  });

  test("18. FAQ - View all FAQs link", async ({ page }) => {
    await page.getByRole("link", { name: "View all FAQs" }).click();
    await expect(page).toHaveURL(/\/faq/);
  });

  test("19. Footer - Privacy Policy link", async ({ page }) => {
    await page.getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL(/\/privacy/);
  });

  test("20. Footer - Terms of Service link", async ({ page }) => {
    await page.getByRole("link", { name: "Terms of Service" }).click();
    await expect(page).toHaveURL(/\/terms/);
  });

  test("21. No console errors on homepage load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    // Filter out known benign errors (e.g. extension-related)
    const criticalErrors = errors.filter(
      (e) => !e.includes("Extension") && !e.includes("chrome-extension")
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
