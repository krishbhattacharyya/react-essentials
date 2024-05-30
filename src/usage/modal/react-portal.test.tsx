import { render, screen } from "@testing-library/react";
import ReactPortalExample from "./react-portal";

test("renders learn react link", () => {
  render(<ReactPortalExample />);
  const linkElement = screen.getByText(/React using portal/i);
  expect(linkElement).toBeInTheDocument();
});
