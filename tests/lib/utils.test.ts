import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn()", () => {
  it("returns a single class unchanged", () => {
    expect(cn("text-red-500")).toBe("text-red-500");
  });

  it("merges multiple classes", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("filters out falsy values", () => {
    expect(cn("base", false && "false-class", undefined, null, "real")).toBe("base real");
  });

  it("resolves Tailwind conflicts (last wins)", () => {
    // twMerge: p-4 wins over p-2 when both target the same property
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("handles conditional classes via object syntax", () => {
    expect(cn({ "text-white": true, "text-black": false })).toBe("text-white");
  });

  it("handles array syntax", () => {
    expect(cn(["flex", "items-center"])).toBe("flex items-center");
  });

  it("returns empty string when no arguments given", () => {
    expect(cn()).toBe("");
  });
});
