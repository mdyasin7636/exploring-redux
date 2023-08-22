import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="border-2 border-orange-700 max-w-7xl mx-auto m-10 rounded-md">
            <h1 className="m-5 text-xl">Parent</h1>
            <ChildOne count={count} setCount={setCount} />
            <ChildTwo count={count} setCount={setCount} />
        </div>
    );
};

export default Parent;