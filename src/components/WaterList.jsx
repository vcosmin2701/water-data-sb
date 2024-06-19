import WaterItem from "./WaterItem";

export default function WaterList({ data }) {
  return (
    <div>
      <ul>
        {data.map((water) => (
          <WaterItem
            key={water.date}
            location={water.location}
            date={water.date}
            pH={water.pH}
          />
        ))}
      </ul>
    </div>
  );
}
