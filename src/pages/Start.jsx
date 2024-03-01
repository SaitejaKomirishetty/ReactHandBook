import StarterFile from "../components/StarterFile";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../utils/cn";
import { TracingBeam } from "../components/ui/tracing-beam";
const Start = () => {
  return (
    <>
      <div className="w-[97vw]">
        <TracingBeam className="px-6">
          <div className="border-spacing-2 border-red-300 ">
            <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              <Boxes />
              <h1
                className={cn("md:text-4xl text-xl text-white relative z-20")}
              >
                Vite React
              </h1>
              <p className="text-center mt-2 text-neutral-300 relative z-20">
                This is the starter file from Vite React
              </p>
            </div>
            <div className="h-screen m-5 border-2 border-white rounded-3xl shadow-md shadow-white">
              <StarterFile />
            </div>
          </div>
        </TracingBeam>
      </div>
    </>
  );
};

export default Start;
