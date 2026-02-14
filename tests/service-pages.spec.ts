/**
 * Service Pages Button Test Suite
 * Tests: cloud-solutions, devops-services, seo-services, digital-marketing,
 *        data-analytics-business-intelligence, cybersecurity-compliance
 * Run: npx playwright test tests/service-pages.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.setTimeout(60000);

const servicePages = [
  { path: "/services/cloud-solutions", cta: "Get a Free Infrastructure Audit" },
  { path: "/services/devops-services", cta: "Get a Free DevOps Audit" },
  { path: "/services/seo-services", cta: "Get Your Free SEO Audit" },
  { path: "/services/digital-marketing", cta: "Get a Free Marketing Audit" },
  { path: "/services/data-analytics-business-intelligence", cta: "Consult a Data Specialist" },
  { path: "/services/cybersecurity-compliance", cta: "Get a Free Security Consultation" },
];

for (const { path, cta } of servicePages) {
  test.describe(`Service Page: ${path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: "domcontentloaded" });
    });

    test(`Page loads and takes screenshot`, async ({ page }) => {
      await expect(page).toHaveURL(new RegExp(path.replace(/\//g, "\\/")));
      const slug = path.split("/").pop() || "page";
      await page.screenshot({ path: `test-results/services/${slug}.png`, fullPage: true });
    });

    test(`PageHero - Get Started navigates to /contact`, async ({ page }) => {
      await page.getByRole("link", { name: "Get Started" }).click();
      await expect(page).toHaveURL(/\/contact/);
    });

    test(`PageHero - Our Portfolio navigates to /portfolio`, async ({ page }) => {
      await page.getByRole("link", { name: "Our Portfolio" }).click();
      await expect(page).toHaveURL(/\/portfolio/);
    });

    test(`CTA - "${cta}" navigates to /contact`, async ({ page }) => {
      await page.getByRole("link", { name: cta }).click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });
}

test.describe("Service Pages - Header Navigation", () => {
  test("Header Contact CTA works from service page", async ({ page }) => {
    await page.goto(`${BASE_URL}/services/cloud-solutions`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("Header Home link works", async ({ page }) => {
    await page.goto(`${BASE_URL}/services/seo-services`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });
});

test.describe("Service Pages - No console errors", () => {
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
