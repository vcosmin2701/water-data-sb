export default function WaterItem({ location, date, pH }) {
  return (
    <li className="m-4">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold">{location}</h2>
        <p className="mt-2">Date of sampling: {date}</p>
        <p className="mt-2">pH Level: {pH}</p>
      </div>
    </li>
  );
}
