/**
 * Portfolio Pages Test Suite
 * Tests all portfolio pages: main, service-provider-mobile-app, enterprise-resource-system, customer-engagement-platform
 * Run: npx playwright test tests/portfolio-pages.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.setTimeout(60000);

test.describe("Portfolio Main Page (/portfolio)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio`, { waitUntil: "domcontentloaded" });
  });

  test("1. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/portfolio$/);
    await page.screenshot({ path: "test-results/portfolio/01-main-page.png", fullPage: true });
  });

  test("2. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("3. PageHero - Our Portfolio stays on portfolio (or scrolls)", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("4. Project card opens modal when clicked", async ({ page }) => {
    const card = page.getByText("Enterprise Resource Management System").first();
    await card.scrollIntoViewIfNeeded();
    await card.click();
    await expect(page.getByText("The Challenge")).toBeVisible({ timeout: 10000 });
    await page.screenshot({ path: "test-results/portfolio/04-modal-open.png" });
  });

  test("5. Modal - View Full Case Study navigates to detail page", async ({ page }) => {
    await page.getByText("Enterprise Resource Management System").first().click();
    await page.getByRole("link", { name: "View Full Case Study" }).click();
    await expect(page).toHaveURL(/\/portfolio\/enterprise-resource-system/);
  });

  test("6. Modal - Close button closes modal", async ({ page }) => {
    await page.getByText("Service Provider Mobile Application").first().click();
    await expect(page.getByText("The Challenge")).toBeVisible();
    await page.getByRole("button", { name: "Close" }).click();
    await expect(page.getByText("The Challenge")).not.toBeVisible();
  });

  test("7. Modal - X button closes modal", async ({ page }) => {
    await page.getByText("Customer Engagement Web Platform").first().click();
    await page.getByRole("button").filter({ has: page.locator("svg") }).first().click();
    await expect(page.getByText("The Challenge")).not.toBeVisible();
  });

  test("8. CTA - Talk to our team navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Talk to our team" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Portfolio Detail - Service Provider Mobile App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio/service-provider-mobile-app`, { waitUntil: "domcontentloaded" });
  });

  test("9. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/portfolio\/service-provider-mobile-app/);
    await page.screenshot({ path: "test-results/portfolio/09-service-provider.png", fullPage: true });
  });

  test("10. Back to Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Back to Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });

  test("11. View More Projects navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "View More Projects" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });

  test("12. Start Your Project navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Start Your Project" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Portfolio Detail - Enterprise Resource System", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio/enterprise-resource-system`, { waitUntil: "domcontentloaded" });
  });

  test("13. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/portfolio\/enterprise-resource-system/);
    await page.screenshot({ path: "test-results/portfolio/13-enterprise-resource.png", fullPage: true });
  });

  test("14. Back to Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Back to Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });

  test("15. View More Projects navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "View More Projects" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });

  test("16. Start Your Project navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Start Your Project" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Portfolio Detail - Customer Engagement Platform", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio/customer-engagement-platform`, { waitUntil: "domcontentloaded" });
  });

  test("17. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/portfolio\/customer-engagement-platform/);
    await page.screenshot({ path: "test-results/portfolio/17-customer-engagement.png", fullPage: true });
  });

  test("18. Back to Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Back to Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });

  test("19. View More Projects navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "View More Projects" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });

  test("20. Start Your Project navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Start Your Project" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Portfolio - Header Navigation", () => {
  test("21. Header links work from portfolio page", async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("22. Header - Contact CTA works", async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio/service-provider-mobile-app`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Portfolio - No console errors", () => {
  const portfolioUrls = [
    "/portfolio",
    "/portfolio/service-provider-mobile-app",
    "/portfolio/enterprise-resource-system",
    "/portfolio/customer-engagement-platform",
  ];

  for (const url of portfolioUrls) {
    test(`23. No console errors on ${url}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      await page.goto(`${BASE_URL}${url}`, { waitUntil: "domcontentloaded" });
      const criticalErrors = errors.filter(
        (e) => !e.includes("Extension") && !e.includes("chrome-extension")
      );
      expect(criticalErrors).toHaveLength(0);
    });
  }
});
