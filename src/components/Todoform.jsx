import { useState } from "react";
function Todoform({onAddTodo}){
  const [Inputvalue, setInputvalue] = useState("");

  function handleinput(value) {
    setInputvalue(value);
  }
  function handle22(event){
    event.preventDefault();
    onAddTodo(Inputvalue)
    setInputvalue("");
  }
    return(
        <div>
          <form
          onSubmit={handle22}
          className="flex w-full max-w-xs mx-auto mb-8 overflow-hidden rounded-full border border-1 bg-blue-50"
        >
          <input
            type="text"
            value={Inputvalue}
            onChange={(event) => handleinput(event.target.value)}
            autoComplete="off"
            className="flex-1 min-w-0 px-4 py-3 outline-none bg-transparent "
          />

          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-500 text-white text-sm px-4 py-3 transition-colors"
          >
            Add Task
          </button>
        </form>
        </div>
    );
}

export default Todoform;