import {render, screen, waitFor} from '../../../../test-utils';
import withSearchExample from './with-search-example'

test('withSearchExample should call', async()=>{
    const MockComponent = jest.fn(() => null);
    const Component = withSearchExample(MockComponent, {
        url: "https://jsonplaceholder.typicode.com/todos",
        queryKey: "todos",
        searchKey: "title",
      });
    render(<Component />);
    await waitFor(() => expect(MockComponent).toBeCalled());
})
