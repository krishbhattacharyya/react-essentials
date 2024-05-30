import { render, screen} from '@testing-library/react'
import ReactSmartSearch from "./react-smart-search";

test('Testnow smart search', () => {
    render(<ReactSmartSearch />);
    const checkElement = screen.getByText(/Search by name/i);
    expect(checkElement).toBeInTheDocument();
})