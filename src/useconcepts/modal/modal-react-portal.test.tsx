import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalReactPortal from "./modal-react-portal";

type handlerType = {
  (): void;
};
test("renders modal react portal and fired close", () => {
  const mockOnChangeHandler = jest.fn() as handlerType;
  render(
    <ModalReactPortal show={true} close={mockOnChangeHandler}>
      Test modal
    </ModalReactPortal>
  );
  const linkElement = screen.getByText(/Test modal/i);
  expect(linkElement).toBeInTheDocument();
  const buttonCloseElement = screen.getByRole("button", { name: /close/i });
  fireEvent.click(buttonCloseElement);
  expect(mockOnChangeHandler).toHaveBeenCalled();
});
