

const ChildTwo = ({count, setCount}) => {
 
  return (
    <div className="border-2 border-purple-600 m-10 max-w-4xl mx-auto rounded-md">
      <div className="bg-purple-300 w-10 h-10 m-5 rounded-full text-3xl grid place-content-center">
        <p>2</p>
      </div>
      <div className="w-full grid place-content-center">
        <div className="flex shrink-0 px-10 m-10 gap-5 rounded-xl max-w-md justify-center items-center">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-red-300 py-2 px-5 rounded-md"
          >
            Decrement
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-emerald-300 py-2 px-5 rounded-md"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildTwo;
