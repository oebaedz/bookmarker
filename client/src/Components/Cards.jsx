const Cards = ({ bookmark }) => {
  const { data } = bookmark;
  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          className="card w-[600px] overflow-hidden flex shadow-md border border-green-700 hover:bg-gray-50 cursor-pointer rounded-md"
        >
          <div className="w-64">
            <img
              className="object-cover h-full"
              src="https://th.bing.com/th/id/OIP.4w_fBEp47UTduEeGEam1OgHaE7?w=186&h=124&c=7&r=0&o=5&pid=1.7"
              alt="kajian"
            />
          </div>
          <div className="p-2 w-full">
            <h1 className="font-bold">{item.kitab}</h1>
            <div className="text-xs text-black font-light gap-2 flex">
              <p>{item.time}</p>
              <p>||</p>
              <p>{item.location}</p>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="text-xs mt-2 font-medium text-green-600">
                  Al-Maqru':
                </p>
                <p className="font-medium">
                  {item.almaqru ? item.almaqru : "Ga ada"}
                </p>
                <p className="text-xs text-gray-500">
                  {`Hal. ${item.almaqru_page} (${item.kitab})`}
                </p>
                <p className="text-xs text-gray-500">
                  {`Hal. ${item.almaqru_srh_page} (${item.kitab == 'Fathul Qarib' ? 'Al-Bajuri' : 'Sirajut Thalibin'})`}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs mt-2 font-medium text-green-600">
                  Al-Atiyah:
                </p>
                <p className="font-medium">
                  {item.alnext ? item.alnext : "Ga ada"}
                </p>
                <p className="text-xs text-gray-500">
                  {`Hal. ${item.almaqru_page} (${item.kitab})`}
                </p>
                <p className="text-xs text-gray-500 pb-1">
                {`Hal. ${item.alnext_srh_page} (${item.kitab == 'Fathul Qarib' ? 'Al-Bajuri' : 'Sirajut Thalibin'})`}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
