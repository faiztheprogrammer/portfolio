import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("renders hero with name, role, and CTAs", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Faiz Ur Rehman",
    );
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Software Engineer",
    );
    await expect(page.getByRole("link", { name: "View my work" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Get in touch" })).toBeVisible();
  });

  test("has exactly one h1 and all main sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    for (const heading of [
      "Selected Work",
      "How I Engineer",
      "Experience",
      "About",
    ]) {
      await expect(
        page.getByRole("heading", { level: 2, name: heading }),
      ).toBeVisible();
    }
  });

  test("has SEO metadata and JSON-LD", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Faiz Ur Rehman — Software Engineer/);
    const jsonLd = page.locator('script[type="application/ld+json"]').first();
    const parsed = JSON.parse((await jsonLd.textContent()) ?? "{}");
    expect(parsed["@type"]).toBe("Person");
    expect(parsed.name).toBe("Faiz Ur Rehman");
  });

  test("navigates to a case study from a project card", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /SkillSwap/ }).first().click();
    await expect(page).toHaveURL(/\/projects\/skillswap/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "SkillSwap",
    );
    await expect(page.getByText("Verify it yourself")).toBeVisible();
  });

  test("theme toggle switches and persists", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "dark");
    // Wait for hydration: hero entrance animation finishing means React is live
    await expect(page.locator("h1")).toHaveCSS("opacity", "1", { timeout: 15000 });
    await page.getByRole("button", { name: /Switch to light theme/ }).click();
    await expect(html).toHaveAttribute("data-theme", "light");
    await page.reload();
    await expect(html).toHaveAttribute("data-theme", "light");
  });
});

test.describe("Contact form", () => {
  test("submits successfully with valid input", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Name").fill("Playwright Bot");
    await page.getByLabel("Email").fill("bot@example.com");
    await page.getByLabel("Message").fill("Automated end-to-end check.");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText(/Message sent/)).toBeVisible();
  });

  test("API rejects invalid payloads", async ({ request }) => {
    const res = await request.post("/api/contact", {
      data: { name: "", email: "not-an-email", message: "" },
    });
    expect(res.status()).toBe(400);
  });
});

test.describe("Routes", () => {
  test("resume page renders", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Faiz Ur Rehman",
    );
    await expect(page.getByText("CodeAutomation")).toBeVisible();
  });

  test("all case studies render with verify section", async ({ page }) => {
    for (const slug of [
      "skillswap",
      "sdet-automation",
      "whatsapp-automation",
      "productivity-ai",
    ]) {
      await page.goto(`/projects/${slug}`);
      await expect(page.getByText("Verify it yourself")).toBeVisible();
    }
  });

  test("sitemap and robots respond", async ({ request }) => {
    expect((await request.get("/sitemap.xml")).status()).toBe(200);
    expect((await request.get("/robots.txt")).status()).toBe(200);
  });
});

test.describe("Accessibility basics", () => {
  test("skip link focuses first", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to main content" }),
    ).toBeFocused();
  });
});
