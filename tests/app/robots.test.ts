import { describe, expect, it } from "vitest";

import robots from "@/app/robots";

describe("robots()", () => {
  it("returns an object", () => {
    expect(typeof robots()).toBe("object");
  });

  it("contains a rules array", () => {
    const result = robots();
    expect(Array.isArray(result.rules)).toBe(true);
  });

  it("allows all user agents", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const allRule = rules.find(
      (r) => r.userAgent === "*" || (Array.isArray(r.userAgent) && r.userAgent.includes("*")),
    );
    expect(allRule).toBeDefined();
  });

  it("allows crawling '/'", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const allRule = rules.find((r) => r.userAgent === "*");
    expect(allRule?.allow).toContain("/");
  });

  it("points sitemap to the correct URL", () => {
    const result = robots();
    const sitemap = Array.isArray(result.sitemap) ? result.sitemap[0] : result.sitemap;
    expect(sitemap).toBe("https://fazol.news/sitemap.xml");
  });

  it("sets the canonical host", () => {
    const result = robots();
    expect(result.host).toBe("https://fazol.news");
  });
});
