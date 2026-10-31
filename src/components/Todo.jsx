import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

function Todo(){
  const [Inputvalue, setInputvalue] = useState("");
  const [task, settask] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [datetime, setdatetime]=useState("");

  function handleinput(value) {
    setInputvalue(value);
  }

  function handle22(event) {
    event.preventDefault();

    const value = Inputvalue.trim();
    if (!value || task.includes(value)) return;

    settask((prev) => [value,...prev]);
    setInputvalue("");
  }

  function handleCheck(index) {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  }
    
    setInterval(()=>{
     const now=new Date();
    const curdate=now.toLocaleDateString();
    const curtime=now.toLocaleTimeString();
    setdatetime(`${curdate}-${curtime}`)
    },1000);


  function handleDelete(index) {
    settask((prev) => prev.filter((_, i) => i !== index));

    setCompleted((prev) =>
      prev
        .filter((i) => i !== index)
        .map((i) => (i > index ? i - 1 : i))
    );
  }
   function handledeteleall(){
    settask([]);
   }
  return (
    <section className=" flex justify-center mt-4 px-4 py-16 border border-1 ml-100 mr-100 ">
      <div className="w-full max-w-md">
        <h1 className="sm:text-xl md:text-2xl lg:text-3xl text-4xl font-bold text-center mb-8">
          Todo List
        </h1>
          <h2 className="ml-28   p-6">
            {datetime}
          </h2>
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

        <ul className="space-y-4 max-w-xs mx-auto">
          {task.map((curtask, index) => (
            <li
              key={curtask}
              className="flex items-center justify-between gap-3 bg-[#f2f4f4]   rounded-full px-5 py-3.5"
            >
              <span
                className={`flex-1 min-w-0 break-words text-sm ${
                  completed.includes(index)
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {curtask}
              </span>

              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => handleCheck(index)}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full p-1 transition-colors"
                  aria-label="Mark task complete"
                >
                  <FaRegCheckCircle size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Delete task" 
                  >
                  <MdDelete size={23} />
                </button>
              </div>
            </li>
          ))}
        </ul>
                <button onClick={handledeteleall} className=" block mx-auto bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg">clear all</button>

      </div>
      
      
    </section>
  );
}

export default Todo;