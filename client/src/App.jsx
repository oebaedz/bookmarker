import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Components/Cards";
import Layout from "./Layout";

function App() {
  const [bookmark, setBookmark] = useState('')

  const getData = async () => {
    const res = await fetch('http://localhost:1999/')
    const mark = await res.json()
    setBookmark(mark)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <Layout title={'Bookmark Kajian Al-Insijam'}>
        <div className="flex flex-col my-4 gap-2 items-center">
          <Link to="/add" className="px-10 py-2 rounded-xl bg-green-300">Tambah Bookmark</Link>
          <Cards bookmark={bookmark} />
        </div>
      </Layout>
    </>
  );
}

export default App;
