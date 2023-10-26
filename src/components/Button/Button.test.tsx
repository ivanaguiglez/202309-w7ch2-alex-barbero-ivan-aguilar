import Button from "./Button";
import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it is clicked", () => {
    test("Then it should trigger click event", () => {
      const testClick = vi.fn();
      render(<Button symbol="+" actionOnClick={testClick} />);
      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(testClick).toBeCalled();
    });
  });
});
