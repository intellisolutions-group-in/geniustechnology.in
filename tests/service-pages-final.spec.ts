/**
 * Final 6 Service Pages Button Test Suite
 * Tests: ui-ux-design, software-consulting, erp-solutions, system-integration,
 *        ai-automation-solutions, maintenance-support
 * Run: npx playwright test tests/service-pages-final.spec.ts
 */

import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

const servicePages = [
  { path: "/services/ui-ux-design", cta: "Get a Free Design Audit" },
  { path: "/services/software-consulting", cta: "Book a Strategy Session" },
  { path: "/services/erp-solutions", cta: "Get a Free ERP Consultation" },
  { path: "/services/system-integration", cta: "Consult an Integration Expert" },
  { path: "/services/ai-automation-solutions", cta: "Consult an AI Expert" },
  { path: "/services/maintenance-support", cta: "Get a Free Support Quote" },
];

for (const { path, cta } of servicePages) {
  test.describe(`Service Page: ${path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: "domcontentloaded" });
    });

    test(`Page loads and takes screenshot`, async ({ page }) => {
      await expect(page).toHaveURL(new RegExp(path.replace(/\//g, "\\/")));
      const slug = path.split("/").pop() || "page";
      await page.screenshot({ path: `test-results/services-final/${slug}.png`, fullPage: true });
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
