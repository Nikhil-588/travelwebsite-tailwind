function Todolist({key,data,  onhandledelete}){
    return(
        <div>
          <li
              key={index}
              className="flex items-center justify-between gap-3 bg-[#f2f4f4]   rounded-full px-5 py-3.5"
            >
              <span
                className={`flex-1 min-w-0 break-words text-sm ${
                  completed.includes(data)
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
        </div>
    );
}

export default Todolist;