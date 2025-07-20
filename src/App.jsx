import { useState, useEffect } from "react"
function App() {
  const [num, setNum] = useState(0);
  const newNum = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    setNum(randomNum);
    console.log(randomNum);
  }
  useEffect(() => {
    newNum(); // this will run once after component mounts
  }, [setNum]);
  return (
    <div className="w-full p-5 bg-gray-950 h-screen flex justify-center items-center">
      <div className="w-fullsm:w-1/2 md:w-1/3">
        <div className="mb-4 w-full aspect-4/3 overflow-hidden rounded-3xl">
          <img
            className="object-cover h-full w-full"
            src={`https://source.unsplash.com/random/2400x1800?sig=${num}`} alt="image" />
        </div>
        <div className="mt-4 w-full flex justify-center">
          <button
            onClick={newNum}
            className="w-full cursor-pointer bg-blue-900 py-4 px-2 rounded-3xl text-gray-300 font-semibold text-xl">
            Click Here to Generate✨
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
