import { useState } from "react";
import { Button } from "@/components/ui/button";

const Increment = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center space-x-4 bg-[#fffff] w-[123px] h-[64px] border border-black rounded-[15px]">
      <Button
        className="bg-[#fffff] text-[#00000] shadow-none hover:bg-[#fffff] hover:text-[#00000] hover:shadow-none focus:ring-0 active:ring-0"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <span className="text-lg font-medium">{count}</span>
      <Button
        className="bg-[#fffff] text-[#00000] shadow-none hover:bg-[#fffff] hover:text-[#00000] hover:shadow-none focus:ring-0 active:ring-0"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default Increment;
