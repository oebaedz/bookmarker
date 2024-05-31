import { useEffect, useState } from "react";
import Cards from "./Components/Cards";

function App() {
  const [bookmark, setBookmark] = useState('')

  const getData = async() => {
    const res = await fetch('http://localhost:1999/')
    const mark = await res.json()
    setBookmark(mark)
  }
  // console.log(bookmark)
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-3xl bg-green-400 text-center font-bold py-3">
          Bookmark Kajian Al-Insijam
        </h1>
        {/* {bookmark.map(a=> "a")} */}
        <div className="flex flex-col my-4 items-center">
          <Cards bookmark={bookmark}/>
        </div>
      </div>
    </>
  );
}

export default App;
