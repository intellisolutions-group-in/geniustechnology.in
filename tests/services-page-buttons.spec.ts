/**
 * Services Page Button & Link Test Suite
 * Run: npx playwright test tests/services-page-buttons.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.describe("Services Page Button Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/services`, { waitUntil: "networkidle" });
  });

  test("1. Services page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/services$/);
    await page.screenshot({ path: "test-results/services/01-services-page.png", fullPage: true });
  });

  test("2. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.locator("main").getByRole("link", { name: "Get Started" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await page.screenshot({ path: "test-results/services/02-get-started.png" });
  });

  test("3. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.locator("main").getByRole("link", { name: "Our Portfolio" }).first().click();
    await expect(page).toHaveURL(/\/portfolio/);
    await page.screenshot({ path: "test-results/services/03-our-portfolio.png" });
  });

  test("4. CTA - Get Started Now navigates to /contact", async ({ page }) => {
    await page.locator("main").getByRole("link", { name: "Get Started Now" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("5. Service card - Web Development navigates correctly", async ({ page }) => {
    await page.locator("main a.service-card-glow[href='/services/web-development']").first().click();
    await expect(page).toHaveURL(/\/services\/web-development/);
  });

  test("6. Service card - App Development navigates correctly", async ({ page }) => {
    await page.locator("main a.service-card-glow[href='/services/app-development']").first().click();
    await expect(page).toHaveURL(/\/services\/app-development/);
  });

  test("7. Service card - Cloud Solutions navigates correctly", async ({ page }) => {
    await page.locator("main a.service-card-glow[href='/services/cloud-solutions']").first().click();
    await expect(page).toHaveURL(/\/services\/cloud-solutions/);
  });

  test("8. Service card - SEO Services navigates correctly", async ({ page }) => {
    await page.locator("main a.service-card-glow[href='/services/seo-services']").first().click();
    await expect(page).toHaveURL(/\/services\/seo-services/);
  });

  test("9. Service card - UI/UX Design navigates correctly", async ({ page }) => {
    await page.locator("main a.service-card-glow[href='/services/ui-ux-design']").first().click();
    await expect(page).toHaveURL(/\/services\/ui-ux-design/);
  });

  test("10. Sample service cards - Custom Software, DevOps, ERP navigate correctly", async ({ page }) => {
    await page.locator("main a.service-card-glow[href='/services/custom-software-development']").first().click();
    await expect(page).toHaveURL(/\/services\/custom-software-development/);

    await page.goto(`${BASE_URL}/services`, { waitUntil: "networkidle" });
    await page.locator("main a.service-card-glow[href='/services/devops-services']").first().click();
    await expect(page).toHaveURL(/\/services\/devops-services/);

    await page.goto(`${BASE_URL}/services`, { waitUntil: "networkidle" });
    await page.locator("main a.service-card-glow[href='/services/erp-solutions']").first().click();
    await expect(page).toHaveURL(/\/services\/erp-solutions/);
  });

  test("11. No console errors on Services page load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/services`, { waitUntil: "networkidle" });
    const criticalErrors = errors.filter(
      (e) => !e.includes("Extension") && !e.includes("chrome-extension")
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
