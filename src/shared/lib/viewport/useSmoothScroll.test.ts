import { renderHook } from "@testing-library/react";
import type { MouseEvent } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useSmoothScroll } from "./useSmoothScroll";

describe("useSmoothScroll hook", () => {
  const mockScrollIntoView = vi.fn();
  const mockEvent = {
    preventDefault: vi.fn(),
  } as unknown as MouseEvent;

  beforeEach(() => {
    vi.spyOn(document, "getElementById").mockImplementation((id) => {
      if (id === "target-section") {
        return {
          scrollIntoView: mockScrollIntoView,
        } as unknown as HTMLElement;
      }
      return null;
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("предотвращает стандартное поведение ссылки (preventDefault)", () => {
    const { result } = renderHook(() => useSmoothScroll());
    const scrollTo = result.current;

    scrollTo("target-section")(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it("вызывает scrollIntoView({ behavior: 'smooth' }), если элемент найден", () => {
    const { result } = renderHook(() => useSmoothScroll());
    const scrollTo = result.current;

    scrollTo("target-section")(mockEvent);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("корректно отрезает символ '#' из переданного ID", () => {
    const { result } = renderHook(() => useSmoothScroll());
    const scrollTo = result.current;

    // Передаем id с решеткой
    scrollTo("#target-section")(mockEvent);

    expect(document.getElementById).toHaveBeenCalledWith("target-section");
    expect(mockScrollIntoView).toHaveBeenCalled();
  });

  it("не падает, если элемент по ID не найден на странице", () => {
    const { result } = renderHook(() => useSmoothScroll());
    const scrollTo = result.current;

    // Ничего не должно упасть, scrollIntoView не должен вызваться
    scrollTo("missing-section")(mockEvent);

    expect(document.getElementById).toHaveBeenCalledWith("missing-section");
    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });
});
