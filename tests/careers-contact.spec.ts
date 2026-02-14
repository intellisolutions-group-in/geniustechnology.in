/**
 * Careers & Contact Pages Test Suite
 * Tests: /careers, /contact - buttons, forms, navigation
 * Run: npx playwright test tests/careers-contact.spec.ts
 */

import { test, expect } from "@playwright/test";
import path from "path";

const BASE_URL = "http://localhost:3000";
const SAMPLE_RESUME = path.join(process.cwd(), "tests", "fixtures", "sample-resume.pdf");

test.setTimeout(60000);

test.describe("Careers Page (/careers)", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}/careers`, { waitUntil: "domcontentloaded" });
  });

  test("1. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/careers/);
    await page.screenshot({ path: "test-results/careers-contact/01-careers.png", fullPage: true });
  });

  test("2. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("3. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("4. Job card expand works - shows responsibilities", async ({ page }) => {
    const firstJobCard = page.locator(".border.border-gray-200.rounded-2xl").first();
    await firstJobCard.getByText("Frontend Developer").click();
    await expect(firstJobCard.getByRole("heading", { name: "Key Responsibilities" })).toBeVisible();
  });

  test("5. Apply Now opens modal", async ({ page }) => {
    await page.getByRole("button", { name: "Apply Now" }).first().click();
    await expect(page.getByText("Apply for Frontend Developer")).toBeVisible({ timeout: 10000 });
    const modal = page.locator(".fixed.inset-0.z-50");
    await expect(modal.getByRole("textbox").first()).toBeVisible();
  });

  test("6. Modal close button works", async ({ page }) => {
    await page.getByRole("button", { name: "Apply Now" }).first().click();
    await expect(page.getByText("Apply for Frontend Developer")).toBeVisible();
    await page.locator(".fixed.inset-0.z-50 button.absolute.top-4.right-4").click();
    await expect(page.getByText("Apply for Frontend Developer")).not.toBeVisible();
  });

  test("7. Career form submission shows success modal", async ({ page }) => {
    await page.getByRole("button", { name: "Apply Now" }).first().click();

    const modal = page.locator(".fixed.inset-0.z-50");
    await modal.locator('input').nth(0).fill("Test User");
    await modal.locator('input[type="email"]').fill("test@example.com");
    await modal.locator('input').nth(2).fill("+1234567890");
    await modal.locator('input').nth(3).fill("Vadodara");

    await modal.locator('input[type="file"]').setInputFiles(SAMPLE_RESUME);

    await modal.getByRole("button", { name: "Submit Application" }).click();

    await expect(page.getByText("Thank you! Our team will review your application")).toBeVisible({ timeout: 10000 });
    await page.screenshot({ path: "test-results/careers-contact/07-careers-success.png" });
  });

  test("8. Career form validation - required fields", async ({ page }) => {
    await page.getByRole("button", { name: "Apply Now" }).first().click();
    await page.getByRole("button", { name: "Submit Application" }).click();
    await expect(page.getByText("Apply for Frontend Developer")).toBeVisible();
  });
});

test.describe("Contact Page (/contact)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`, { waitUntil: "domcontentloaded" });
  });

  test("9. Page loads and takes screenshot", async ({ page }) => {
    await expect(page).toHaveURL(/\/contact/);
    await page.screenshot({ path: "test-results/careers-contact/09-contact.png", fullPage: true });
  });

  test("10. PageHero - Get Started navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("11. PageHero - Our Portfolio navigates to /portfolio", async ({ page }) => {
    await page.getByRole("link", { name: "Our Portfolio" }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test("12. Explore Our Services link navigates to /services", async ({ page }) => {
    await page.getByRole("link", { name: "Explore Our Services" }).click();
    await expect(page).toHaveURL(/\/services/);
  });

  test("13. Contact form submission works - shows success modal", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("John Doe");
    await page.getByPlaceholder("you@example.com").fill("john@example.com");
    await page.getByPlaceholder("Tell us about your project...").fill("I need a web app.");

    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByText("Thank you! We will reach you soon.")).toBeVisible({ timeout: 5000 });
    await page.screenshot({ path: "test-results/careers-contact/13-contact-success.png" });
  });

  test("14. Contact form resets after submission", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("Jane Smith");
    await page.getByPlaceholder("you@example.com").fill("jane@example.com");
    await page.getByPlaceholder("Tell us about your project...").fill("Mobile app project");

    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Thank you! We will reach you soon.")).toBeVisible({ timeout: 5000 });

    await page.getByRole("button").filter({ has: page.locator("svg") }).first().click();
    await expect(page.getByText("Thank you! We will reach you soon.")).not.toBeVisible();

    await expect(page.getByPlaceholder("Your name")).toHaveValue("");
  });

  test("15. ThankYouModal close button works", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("Test");
    await page.getByPlaceholder("you@example.com").fill("test@test.com");
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByText("Thank you! We will reach you soon.")).toBeVisible({ timeout: 5000 });
    await page.getByRole("button").filter({ has: page.locator("svg") }).first().click();
    await expect(page.getByText("Thank you! We will reach you soon.")).not.toBeVisible();
  });

  test("16. Social links open in new tab", async ({ page }) => {
    const contactSection = page.locator("section").filter({ hasText: "Get in Touch" });
    const facebookLink = contactSection.getByRole("link", { name: "Facebook" });
    await expect(facebookLink).toHaveAttribute("href", /facebook/);
    await expect(facebookLink).toHaveAttribute("target", "_blank");

    const instagramLink = contactSection.getByRole("link", { name: "Instagram" });
    await expect(instagramLink).toHaveAttribute("href", /instagram/);
  });
});

test.describe("Careers & Contact - Header Navigation", () => {
  test("17. Header links work from careers page", async ({ page }) => {
    await page.goto(`${BASE_URL}/careers`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Home", exact: true }).first().click();
    await expect(page).toHaveURL(BASE_URL + "/");
  });

  test("18. Header links work from contact page", async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`, { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Careers & Contact - No console errors", () => {
  test("19. No console errors on /careers", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/careers`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });

  test("20. No console errors on /contact", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/contact`, { waitUntil: "domcontentloaded" });
    const critical = errors.filter((e) => !e.includes("Extension") && !e.includes("chrome-extension"));
    expect(critical).toHaveLength(0);
  });
});
