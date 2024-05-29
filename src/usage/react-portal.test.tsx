import React from "react";
import { render, screen } from "@testing-library/react";
import ReactPortalExample from "./react-portal";

test("renders learn react link", () => {
  render(<ReactPortalExample />);
  const linkElement = screen.getByText(/React portal/i);
  expect(linkElement).toBeInTheDocument();
});
