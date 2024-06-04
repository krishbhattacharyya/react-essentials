import withSimpleHOCExample from "../../useconcepts/hoc/hoc-component/simpleexample/with-simple-example";
import SimpleExampleOne from "../../useconcepts/hoc/hoc-component/simpleexample/simple-example-sub-one";
import SimpleExampleTwo from "../../useconcepts/hoc/hoc-component/simpleexample/simple-example-sub-two";

import withSearchExample from "../../useconcepts/hoc/hoc-component/searchexample/with-search-example";
import SearchExampleOne from "../../useconcepts/hoc/hoc-component/searchexample/search-example-sub-one";
import SearchExampleTwo from "../../useconcepts/hoc/hoc-component/searchexample/search-example-sub-two";

// Example of simple hoc with counter
const SimpleHOCExampleOne = withSimpleHOCExample(SimpleExampleOne);
const SimpleHOCExampletwo = withSimpleHOCExample(SimpleExampleTwo);

// Example of search hoc
const SearchHOCExampleOne = withSearchExample(SearchExampleOne, {
  url: "https://jsonplaceholder.typicode.com/todos",
  queryKey: "todos",
  searchKey: "title",
});
const SearchHOCExampleTwo = withSearchExample(SearchExampleTwo, {
  url: "https://jsonplaceholder.typicode.com/users",
  queryKey: "users",
  searchKey: "name",
});

export default function ReactHOC() {
  return (
    <>
      <h3>
        React hoc- It is besically a function takes a react component and
        prodeced new updated javascript componet
      </h3>
      <p>
        RichPerson[updated component]=Money[Higer order
        Function](Person)[Component]
      </p>
      <p>Very simple example of HOC</p>
      <SimpleHOCExampleOne />
      <SimpleHOCExampletwo />
      <p>Search example of HOC</p>
      <SearchHOCExampleOne />
      <SearchHOCExampleTwo />
    </>
  );
}
