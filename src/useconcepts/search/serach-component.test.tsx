import { render, screen, fireEvent  } from "@testing-library/react";
import SearchComponent from "./serach-component";
import  userEvent  from "@testing-library/user-event"

test("Test the search component", async() => {
    const user = userEvent.setup();
    render(<SearchComponent />);
    const checkElement = screen.getByText(/Search by name/i);
    expect(checkElement).toBeInTheDocument();
    const inputAddressElement = screen.getByPlaceholderText("search by username");
    await user.type(inputAddressElement, "raj"); 
    expect(inputAddressElement).toHaveValue("raj");
    const checkTypedElement = screen.queryByText(/raj/i);
    expect(checkTypedElement).not.toBeInTheDocument();
});
