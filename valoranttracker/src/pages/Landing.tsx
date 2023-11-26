import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-valorant-menu w-full h-screen bg-cover pt-28">
      <div className="mt-[620px] flex flex-col justify-center align-middle items-center text-start font-roboto">
        <h1 className="text-5xl font-inter italic text-white">Welcome to</h1>
        <h2 className="text-9xl font-valorant text-white">Radiante Tra<span className="text-mainred">ck</span>er</h2>
        <Link to="/agents">
          <button
            className="font-roboto m-4 text-4xl hover:bg-mainred bg-darkred px-6 py-4 rounded-sm uppercase font-bold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            Login
          </button>
        </Link>
      </div>

      <h1 className="font-roboto text-md text-white flex flex-row w-full text-start pl-2 pt-2 opacity-20">
        Made by Adrian Widmer, Icaro Canela, and Rafael Matos. Version A
        0.0.1.2023
      </h1>
    </div>
  );
}

export default Landing;
