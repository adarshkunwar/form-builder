import FieldOption from "../fieldOption";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("testing fieldOption", () => {
  it("should show the name of the fieldOption", () => {
    render(<FieldOption name="checkbox" onclick={() => {}} />);
    expect(screen.getByText("checkbox")).toBeInTheDocument();
  });

  it("should call the onclick function", () => {
    const onClick = vi.fn();
    render(<FieldOption name="checkbox1" onclick={onClick} />);
    fireEvent.click(screen.getByText("checkbox1"));
    expect(onClick).toHaveBeenCalled();
  });
});
