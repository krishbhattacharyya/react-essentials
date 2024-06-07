import "./App.css";
import ReactPortalExample from "./usage/modal/react-portal";
import ReactSmartSearch from "./usage/search/react-smart-search";
import ReactHOC from "./usage/hoc/react-hoc";
import ReactCustomHooks from "./usage/hook/react--custom-hook";

function App() {
  return (
    <>
      <h1>All essential usecases in react</h1>
      <p>Right way to implement the react code</p>
      <ReactCustomHooks />
      <ReactPortalExample />
      <ReactSmartSearch />
      <ReactHOC />
    </>
  );
}

export default App;
