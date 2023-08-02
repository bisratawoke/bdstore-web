import { useEffect, useState } from "react";
import LocationRepo from "../../../repository/locationRepo";
import { Region } from "../../../domain/models";
export default function index({
  regionNameFormControl,
  setRegionNameFormControl,
  cityNameFormControl,
  setCityNameFormControl,
}: any) {
  const locationRepo = new LocationRepo();
  const [regions, setRegions] = useState<Region[] | null>(null);
  useEffect(() => {
    locationRepo
      .getRegions()
      .then((regions: Region[]) => setRegions(regions))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols gap-1">
      <span className="text-md text-gray-700">
        Specify the location you are at
      </span>
      <div className="grid grid-cols-2 gap-2">
        <select
          name=""
          id=""
          className="border-2 border-gray-300 rounded-xl p-2"
          placeholder="select region"
          onChange={(e) => setRegionNameFormControl(e.target.value)}
          // defaultValue={regionNameFormControl}
          value={regionNameFormControl}
        >
          {regions != null ? (
            <>
              {regions.map((region: Region, indx) => {
                if (indx == 0) {
                  setRegionNameFormControl(region.name);
                }
                return <option value={region.name}>{region.name}</option>;
              })}
            </>
          ) : (
            <></>
          )}
        </select>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-xl"
          placeholder="Enter the city name"
          value={cityNameFormControl}
          onChange={(e) => setCityNameFormControl(e.target.value)}
        />
      </div>
    </div>
  );
}
