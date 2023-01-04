import React, {useState} from 'react';
import { collectionData } from '../collection';



const Collection = () => {

  const [category, setCategory] = useState(collectionData);
  
  const handleBtns = (e) => {
    let word=e.target.value;
     
    if(word === "All"){
      setCategory(collectionData)
    }
    else if(word === "Metaverse") {
      const filtered = collectionData.filter(item=>item.kind === "Metaverse");
      setCategory(filtered)
    }
    else if(word === "Music") {
      const filtered = collectionData.filter(item=>item.kind === "Music");
      setCategory(filtered)
    }
    else if(word === "Sports") {
      const filtered = collectionData.filter(item=>item.kind === "Sports");
      setCategory(filtered)
    }
  }


  return (
    <>
      <section className="">
        <div clasNames="container px-5 py-24 mx-auto">
          <h2 className="mt-16 mb-12 text-center text-2xl font-semibold">NFT Collections</h2>
          <div className="flex flex-wrap mt-4 justify-center lg:mb-4 mb-12">
            <button value="All" onClick={handleBtns} className="mr-2 text-indigo-500 bg-white border-0 py-2 px-6 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">All</button>
            <button value="Metaverse" onClick={handleBtns} className="mr-2 text-indigo-500 bg-white border-0 py-2 px-6 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">Metaverse</button>
            <button value="Sports" onClick={handleBtns} className="mr-2 text-indigo-500 bg-white border-0 py-2 px-6 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">Sports</button>
            <button value="Music" onClick={handleBtns} className="mr-2 mt-4 text-indigo-500 bg-white lg:mt-0 border-0 py-2 px-6 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">Music</button>
          </div>

          <div className="flex flex-wrap -m-2 lg:-m-0">
            {category.map((item) => (
              <div className="lg:p-8 p-4 md:w-1/2 lg:w-1/4 w-1/2" key={item.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={item.linkImg} alt={item.name} />
                  <div className="py-6 px-2">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="tracking-widest text-xs font-medium mb-4">{item.kind}</p>
                    
                    <div className="flex items-center flex-wrap">
                      <p className="leading-relaxed inline-flex items-center mb-1 font-bold text-xl">{item.eth}</p>
                      <h3 className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto font-bold text-xl">{item.price}</h3>
                    </div>
                    
                    <div className="flex items-center flex-wrap">
                      <p className="inline-flex items-center md:mb-2 lg:mb-0">Floor Price
                      </p>
                      <span className="text-red-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto">
                        {item.percent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
    </>
  )
}

export default Collection