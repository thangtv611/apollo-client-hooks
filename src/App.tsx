import { useLazyQuery } from "@apollo/client";
import "./styles.css";
import { GET_LOCATIONS } from "./graphql/query";

interface Location {
  name: string;
  id: number;
  description: string;
  photo: string;
}

const LocationComponent = ({ locations }: { locations: Array<Location> }) => {
  return (
    <>
      {locations.map(({ name, id, description, photo }: any): any => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};

const LocationLazyLoad = () => {
  const [loadingLocation, { called, loading, data }] = useLazyQuery(
    GET_LOCATIONS
  );
  if (called && loading) return <p>Loading locations...</p>;

  if (!called) {
    return <button onClick={() => loadingLocation()}>Loading locations</button>;
  }

  return <LocationComponent locations={data.locations} />;
};

export default function App() {
  return (
    <div>
      <h2>My First Apollo Apps</h2>
      <LocationLazyLoad />
    </div>
  );
}
