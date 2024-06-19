import Title from "./components/Title";
import WaterList from "./components/WaterList";
import waterData from "./water_data";

export default function WaterData() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <Title />
      <WaterList data={waterData} />
    </div>
  );
}
