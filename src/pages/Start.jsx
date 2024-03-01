import StarterFile from "../Compo/StarterFile";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../utils/cn";
const Start = () => {
  return (
    <>
      <div className='h-96 relative w-[80vw] overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg'>
        <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Vite React
        </h1>
        <p className='text-center mt-2 text-neutral-300 relative z-20'>
          This is The Starter file from Vite React{" "}
        </p>
      </div>
      <StarterFile />
    </>
  );
};

export default Start;
