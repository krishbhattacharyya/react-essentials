import "./App.css";
import ReactPortalExample from "./usage/modal/react-portal";
import ReactSmartSearch from './usage/search/react-smart-search'
import ReactHOC from './usage/hoc/react-hoc';

function App() {
  return (
    <>
      <h1>All essential usecases in react</h1>
      <p>Right way to implement the react code</p>
      <ReactPortalExample />
      <ReactSmartSearch />
      <ReactHOC />
    </>
  );
}

export default App;
