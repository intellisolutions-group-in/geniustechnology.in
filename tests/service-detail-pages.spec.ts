/**
 * Service Detail Pages Button Test Suite
 * Tests: web-development, app-development, custom-software-development, saas-product-development, api-development
 * Run: npx playwright test tests/service-detail-pages.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.setTimeout(60000);

const servicePages = [
  {
    path: "/services/web-development",
    ctaText: "Book a Free Consultation",
  },
  {
    path: "/services/app-development",
    ctaText: "Consult Our App Experts",
  },
  {
    path: "/services/custom-software-development",
    ctaText: "Consult a Tech Architect",
  },
  {
    path: "/services/saas-product-development",
    ctaText: "Get a SaaS Strategy Session",
  },
  {
    path: "/services/api-development",
    ctaText: "Consult an API Architect",
  },
];

for (const { path, ctaText } of servicePages) {
  test.describe(`Service: ${path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: "domcontentloaded" });
    });

    test(`Page loads - ${path}`, async ({ page }) => {
      await expect(page).toHaveURL(new RegExp(path.replace(/\//g, "\\/")));
      await page.screenshot({
        path: `test-results/services/${path.split("/").pop()}-page.png`,
        fullPage: true,
      });
    });

    test(`PageHero - Get Started navigates to /contact`, async ({ page }) => {
      await page.getByRole("link", { name: "Get Started" }).click();
      await expect(page).toHaveURL(/\/contact/);
    });

    test(`PageHero - Our Portfolio navigates to /portfolio`, async ({ page }) => {
      await page.getByRole("link", { name: "Our Portfolio" }).click();
      await expect(page).toHaveURL(/\/portfolio/);
    });

    test(`CTA - "${ctaText}" navigates to /contact`, async ({ page }) => {
      const cta = page.getByRole("link", { name: ctaText });
      await cta.scrollIntoViewIfNeeded();
      await cta.click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });
}

test.describe("Service pages - Header navigation", () => {
  test("Header Contact CTA works from service page", async ({ page }) => {
    await page.goto(`${BASE_URL}/services/web-development`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("Header Home link works from service page", async ({ page }) => {
    await page.goto(`${BASE_URL}/services/api-development`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });
});

test.describe("Service pages - No console errors", () => {
  for (const { path } of servicePages) {
    test(`No console errors on ${path}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      await page.goto(`${BASE_URL}${path}`, { waitUntil: "domcontentloaded" });
      const criticalErrors = errors.filter(
        (e) => !e.includes("Extension") && !e.includes("chrome-extension")
      );
      expect(criticalErrors).toHaveLength(0);
    });
  }
});
