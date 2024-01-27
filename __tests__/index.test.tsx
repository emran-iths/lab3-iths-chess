/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
  it("make sure home renders without any issues", () => {
    render(<Home />);
  });
});
