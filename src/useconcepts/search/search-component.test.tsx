import { render, screen, fireEvent  } from "@testing-library/react";
import SearchComponent from "./search-component";
import  userEvent  from "@testing-library/user-event";
import SearchItems from './search-items';

test("Test the search component", async() => {
    const user = userEvent.setup();
    render(<SearchComponent />);
    const serachObj =[{ id:1,userName:'raj',email:'raj@gmsil.com',address:'Delhi'}]
    render(<SearchItems searchArray={serachObj} />);
    const checkElement = screen.getByText(/Search by name/i);
    expect(checkElement).toBeInTheDocument();
    const inputAddressElement = screen.getByPlaceholderText("search by username");
    await user.type(inputAddressElement, "raj"); 
    expect(inputAddressElement).toHaveValue("raj");
    const checkTypedElement = await screen.findByText("raj");
    expect(checkTypedElement).toBeInTheDocument();
});
