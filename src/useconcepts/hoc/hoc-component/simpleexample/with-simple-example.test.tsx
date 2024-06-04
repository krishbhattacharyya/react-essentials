import {render, screen, waitFor} from '@testing-library/react';
import withSimpleHOCExample from './with-simple-example'

test('WithSimpleHOCProps should call', async()=>{
    const MockComponent = jest.fn(() => null);
    const Component = withSimpleHOCExample(MockComponent);
    render(<Component />);
    await waitFor(() => expect(MockComponent).toBeCalled());
})
