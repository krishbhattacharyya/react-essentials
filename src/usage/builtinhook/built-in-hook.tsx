import UseStateExample from '../../useconcepts/builtinhook/usestate/use-state-example';
import UseReducerExample from "../../useconcepts/builtinhook/usereducer/use-reducer-example"
import UseTransitionExample from '../../useconcepts/builtinhook/usetransition/use-transitin-example'

export default function BuiltInHook(){
    return(
      <>
      <h3>
        React Build In hooks
      </h3>
      <p>Todos with derived state using useState</p>
      <hr />
      <UseStateExample />
      <hr />
      <p>Use reducer example</p>
      <hr />
      <UseReducerExample />
      <hr />
      <p>Use Transition example</p>
      <hr />
      <UseTransitionExample />
      <hr />
      </>
    )
}