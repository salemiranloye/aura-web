import { Sparkles } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky px-20 h-16 flex items-center bg-gray-900 z-10">
      <div className="relative w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-tl from-gray-700 to-gray-700 via-gray-400 rounded-xl opacity-75 blur-sm"></div>
        <div className="relative bg-slate-800 flex items-center justify-between w-full px-14 py-8 pb-6 rounded-xl text-white">
          <a className="flex items-center justify-center" href="#">
            <Sparkles className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Aura
            </span>
          </a>
          <nav className="flex-grow flex justify-center gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
              Features
            </a>
            <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
              Pricing
            </a>
          </nav>
          <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#c084fc_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-600 px-3 py-1 text-sm text-white backdrop-blur-3xl ">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}