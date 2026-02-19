import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";

describe("sitemap()", () => {
  it("returns an array", () => {
    const result = sitemap();
    expect(Array.isArray(result)).toBe(true);
  });

  it("includes the home page entry", () => {
    const result = sitemap();
    expect(result.length).toBeGreaterThan(0);
  });

  it("home entry has the correct URL", () => {
    const [home] = sitemap();
    expect(home.url).toBe("https://fazol.news");
  });

  it("home entry has changeFrequency='daily'", () => {
    const [home] = sitemap();
    expect(home.changeFrequency).toBe("daily");
  });

  it("home entry has priority=1", () => {
    const [home] = sitemap();
    expect(home.priority).toBe(1);
  });

  it("home entry has a lastModified date", () => {
    const [home] = sitemap();
    expect(home.lastModified).toBeInstanceOf(Date);
  });
});
