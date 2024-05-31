import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Layout from "./Layout";

function App() {
  const [bookmark, setBookmark] = useState('')

  const getData = async () => {
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
      <Layout>
        <div className="flex flex-col my-4 gap-2 items-center">
          <Cards bookmark={bookmark} />
        </div>
      </Layout>
    </>
  );
}

export default App;
