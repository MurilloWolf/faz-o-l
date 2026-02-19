import { describe, expect, it } from "vitest";

import notices, { type Notice } from "@/lib/data/notices";

const DATE_PATTERN = /^\d{2}-\d{2}-\d{4}$|^\d{4}-\d{2}-\d{2}$/;
const URL_PATTERN = /^https?:\/\/.+/;

describe("notices data", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(notices)).toBe(true);
    expect(notices.length).toBeGreaterThan(0);
  });

  it("every item has required string fields", () => {
    for (const notice of notices) {
      expect(typeof notice.title).toBe("string");
      expect(notice.title.length).toBeGreaterThan(0);

      expect(typeof notice.date).toBe("string");
      expect(notice.date.length).toBeGreaterThan(0);

      expect(typeof notice.linkText).toBe("string");
      expect(notice.linkText.length).toBeGreaterThan(0);

      expect(typeof notice.link).toBe("string");
      expect(notice.link.length).toBeGreaterThan(0);
    }
  });

  it("every date matches one of the accepted formats (MM-DD-YYYY or YYYY-MM-DD)", () => {
    for (const notice of notices) {
      expect(notice.date).toMatch(DATE_PATTERN);
    }
  });

  it("every link is a valid http/https URL", () => {
    for (const notice of notices) {
      expect(notice.link).toMatch(URL_PATTERN);
    }
  });

  it("optional image field, when present, is a non-empty string", () => {
    const withImage = notices.filter((n): n is Required<Notice> => n.image !== undefined);
    for (const notice of withImage) {
      expect(typeof notice.image).toBe("string");
      expect(notice.image.length).toBeGreaterThan(0);
    }
  });

  it("all titles are unique", () => {
    const titles = notices.map((n) => n.title);
    const unique = new Set(titles);
    expect(unique.size).toBe(titles.length);
  });

  it("has no duplicate links (data hygiene)", () => {
    const links = notices.map((n) => n.link);
    const unique = new Set(links);
    const duplicates = links.filter((l, i) => links.indexOf(l) !== i);
    // Report duplicates clearly rather than silently passing
    expect(duplicates, `Duplicate links found: ${duplicates.join(", ")}`).toHaveLength(0);
  });
});
