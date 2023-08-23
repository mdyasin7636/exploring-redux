import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  return (
    <div className="border-2 border-orange-700 max-w-7xl mx-auto m-10 rounded-md">
      <h1 className="m-5 text-xl"></h1>
      <ChildOne />
      <ChildTwo />
    </div>
  );
};

export default Parent;
