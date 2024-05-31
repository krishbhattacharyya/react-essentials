import { render, screen, fireEvent } from "@testing-library/react";
import SearchComponentAddUserForm from "./search-component-add-userform";
import userEvent from "@testing-library/user-event";

test("Test the search add user form component", async () => {
  const user = userEvent.setup();
  const mockSubmit = jest.fn();
  render(<SearchComponentAddUserForm handleSubmit={mockSubmit} />);

  const inputUserNameElement = screen.getByPlaceholderText("userName");

  await user.clear(inputUserNameElement);
  await user.type(inputUserNameElement, "Dan");
  expect(inputUserNameElement).toHaveValue("Dan");

  const inputEmailElement = screen.getByPlaceholderText("email");
  await user.type(inputEmailElement, "dan@gmail.com");
  expect(inputEmailElement).toHaveValue("dan@gmail.com");

  const inputAddressElement = screen.getByPlaceholderText("address");
  await user.type(inputAddressElement, "Canada");
  expect(inputAddressElement).toHaveValue("Canada");

  const inputSubmitButtonElement = screen.getByRole("button", {
    name: /Submit/i,
  });

  fireEvent.submit(inputSubmitButtonElement);

  expect(mockSubmit).toHaveBeenCalled();
});
