import React from "react";

const Cards = ({ bookmark }) => {
  const { data } = bookmark
  return (
    <>
      {data?.map(item => (
        <div key={item.id} className="card w-[600px] overflow-hidden flex shadow-md rounded-md">
          <div className="w-48">
            <img
              className="object-cover h-full"
              src="https://th.bing.com/th/id/OIP.4w_fBEp47UTduEeGEam1OgHaE7?w=186&h=124&c=7&r=0&o=5&pid=1.7"
              alt="kajian"
            />
          </div>
          <div className="p-2">
            <h1 className="font-bold">{item.kitab}</h1>
            <div className="text-sm text-gray-400 gap-2 flex">
              <p>Jum'at, 24 Mei 2024</p>
              <p>||</p>
              <p>Kediaman Ust Bashari Bondowoso</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-xs mt-2 font-medium text-green-600">
                  Al-Maqru':
                </p>
                <p className="font-medium">Fashl fi al-Udzun</p>
                <p className="text-xs text-gray-500">
                  Hal. 19 (Minhaj) || Hal. 345 (Siraj)
                </p>
              </div>
              <div>
                <p className="text-xs mt-2 font-medium text-green-600">
                  Al-Atiyah``:
                </p>
                <p className="font-medium">Fashl fi al-Ain</p>
                <p className="text-xs text-gray-500">
                  Hal. 19 (Minhaj) || Hal. 345 (Siraj)
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
