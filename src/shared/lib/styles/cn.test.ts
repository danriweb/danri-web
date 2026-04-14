import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn utility function", () => {
  it("объединяет обычные классы", () => {
    expect(cn("class-1", "class-2")).toBe("class-1 class-2");
  });

  it("обрабатывает условные классы", () => {
    expect(cn("base-class", false && "false-class", true && "true-class", undefined, null)).toBe(
      "base-class true-class",
    );
  });

  it("обрабатывает массивы классов", () => {
    expect(cn(["class-1", "class-2"], "class-3")).toBe("class-1 class-2 class-3");
  });

  it("перезаписывает конфликтующие классы Tailwind", () => {
    expect(cn("px-2 py-1 bg-red-500", "px-4 bg-blue-500")).toBe("py-1 px-4 bg-blue-500");
  });

  it("возвращает пустую строку без аргументов", () => {
    expect(cn()).toBe("");
  });
});
