import './App.css'

function App() {
  return (
    <div className='container'>
     <div className="image-container">
     <div className="topbox">
     <h1 className='box-title'> Annual retreat </h1>
      <p className='box-text'>The most coveted flagship event for founder & growth leaders in the country designed
to create unique, memorable & bonding in-real-life experiences.</p>
     </div>
     <div className="bottombox">
        <div className="card">
           <img src="./src/assets/chat1.png" alt="" id='img1' className='image' />
        </div>
        <div className="card">
           <img src="./src/assets/chat1.png" alt="" className='image' />
        </div>
        <div className="card">
           <img src="./src/assets/chat2.png" alt="" className='image' id='img3'/>
        </div>
        </div>
     {/* <div className="bg-image">
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65780267ce97ed219a7ea98c_community-photo%20(5).webp" alt="" />
     </div> */}
     </div>
     </div>
  )
}

export default App
