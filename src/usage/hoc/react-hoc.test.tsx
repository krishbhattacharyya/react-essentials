import {render, screen, waitFor} from '../../test-utils';
import ReactHOC from './react-hoc';
import userEvent from '@testing-library/user-event'


describe('Test flow of the simple example hoc',()=>{
    test('Simple example hoc one on hover', async()=>{
        const user = userEvent.setup();
        render(<ReactHOC />)
        const renderElement = screen.getByText(/React hoc/i)
        expect(renderElement).toBeInTheDocument();
        const numverCountForSubOneElement = screen.getByText(/Number of click sub one- /i, { exact: false });// substring match
        expect(numverCountForSubOneElement).toHaveTextContent('0');
        const mouseOverElement = screen.getByText("Simple example one Mouse Over me");// string match
        await user.hover(mouseOverElement);
        expect(numverCountForSubOneElement).toHaveTextContent('1');
    })

    test('Simple example hoc two on click', async()=>{
        const user = userEvent.setup();
        render(<ReactHOC />)
        const renderElement = screen.getByText(/React hoc/i)
        expect(renderElement).toBeInTheDocument();
        const numverCountForSubOneElement = screen.getByText(/Number of click sub two- /i, { exact: false });// substring match
        expect(numverCountForSubOneElement).toHaveTextContent('0');
        const mouseOverElement = screen.getByText("Simple example two click me");// string match
        await user.click(mouseOverElement);
        expect(numverCountForSubOneElement).toHaveTextContent('1');
    })

    test('Flow of search by name hoc with actual API call just for test', async()=>{
        const user = userEvent.setup();
        //const { container } = render(<ReactHOC />)
        render(<ReactHOC />)
        const renderElement = screen.getByText(/React hoc/i)
        expect(renderElement).toBeInTheDocument();
        /*await waitFor(() => {
            expect(screen.getByPlaceholderText("name")).toBeInTheDOM();
        });*/
        await waitFor(() => {
            expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
        });
        const inputAddressElement = screen.getByPlaceholderText("title");
        await user.type(inputAddressElement, "delectus"); 
        expect(inputAddressElement).toHaveValue("delectus");
        const checkTypedElement = screen.queryByText("laboriosam mollitia et enim quasi adipisci quia provident illum");
        expect(checkTypedElement).not.toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
        });
        const inputAddressElementName = screen.getByPlaceholderText("name");
        await user.type(inputAddressElementName, "Leanne Graham"); 
        expect(inputAddressElementName).toHaveValue("Leanne Graham");
        const checkTypedElementName = screen.queryByText("Ervin Howell");
        expect(checkTypedElementName).not.toBeInTheDocument();
    })
})
