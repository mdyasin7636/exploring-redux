import ChildOne from "./ChildOne";

const Parent = () => {
    return (
        <div className="border-2 border-orange-700 max-w-7xl mx-auto m-10 rounded-md">
            <h1 className="m-5 text-xl">Parent</h1>
            <ChildOne/>
        </div>
    );
};

export default Parent;