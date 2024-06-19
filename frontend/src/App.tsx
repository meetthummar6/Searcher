import { useState} from "react"
import axios from "axios"
import DataType from "./data.type"

function App() {
  const [data, setData] = useState<DataType[] | any>([])
  const fetchData = async (e: any) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:8000/api/v1/sampledata/${e.target[0].value}`)
    setData(res.data.data)
  }
  return (
    <>
        <form className="flex flex-col gap-4 w-[98vw] items-center mt-10" onSubmit={(e)=>fetchData(e)}>
          <input type="text" className="w-[25vw] ring-1 rounded-sm ring-blue-900 font-semibold" placeholder="Search" />
          <button type="submit" className="bg-blue-500 px-2 py-1 w-[10vw] rounded-md font-bold text-white">Search</button>
        </form>
        {
          data?.map(
            (item: DataType) => (
              <div className="flex flex-col gap-4  items-center mt-10" key={item.id}>
                <p className="text-3xl font-bold">Name: {item.name}</p>
                <p className="text-3xl font-bold">Author: {item.author}</p>
                <p className="text-3xl font-bold">Email: {item.email}</p>
              </div>
            )
          )
        }
    </>
  )
}

export default App
