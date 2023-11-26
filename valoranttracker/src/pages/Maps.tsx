import MapBox from "../components/MapBox";
import MapsTitle from "../img/MapsTitle.svg";

function Maps() {

  return (
    <div className="bg-map-background bg-cover w-full h-screen text-white flex justify-center ">
      <div className="w-full max-w-7xl -mt-32 font-valorant">
        <div className="flex flex-col">
          <div className="p-4 w-1/2">
            <img src={MapsTitle} alt="" className="h-[700px] shake-animation" />
          </div>
          <div className="-mt-40 flex flex-wrap gap-4 ">
             <MapBox/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
