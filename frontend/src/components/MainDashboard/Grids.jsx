import { GridData } from '../dummyData/GridData';

export default function Grids({data}) {
  return (
    <div className="m-2 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {GridData.map((data) => (
        <div
          key={data.id}
          className="p-4 h-auto w-auto flex flex-row justify-between items-center rounded shadow-md"
        >
          <div className="p-2 m-2 flex flex-col justify-center text-center">
            <div className="text-2xl font-semibold">{data.title}</div>
            <div className="text-blue-500 text-xl mt-1">{data.number}</div>
            <div className="text-sm text-slate-700 mt-1">{data.message}</div>
          </div>
          <div className="p-4 m-2 rounded flex items-center justify-center">
            {data.image}
          </div>
        </div>
      ))}
    </div>
  );
}
