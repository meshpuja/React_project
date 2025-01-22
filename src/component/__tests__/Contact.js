import { getRoles, render } from "@testing-library/react";
import Contact from "../Contact";

test("should load contact component", () => {
  render(<Contact />);
  const heading = screen.getRoles("heading");
  expect(heading).toBeInTheDocument();
});
