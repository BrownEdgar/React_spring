import './App.css'

export default function App() {

  return (
    <div>
      <h1>Images in React</h1>
      {/* <img src="https://images.unsplash.com/photo-1709588191280-acd9303db2cc?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
      {/* 
      <img src="./images/photo.jpg" alt="" />
      <img src={Photo} alt="" /> */}

      <div className="content">
        <img src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='info'>
          <h2>Robert Suares</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint totam distinctio. Sunt eveniet, exercitationem, assumenda explicabo consectetur facere est distinctio ducimus voluptas quam aspernatur blanditiis odit hic molestiae quasi, numquam fugiat aliquid vel quidem nostrum? Nobis voluptas quas sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi error, est deserunt quibusdam unde sint suscipit ad obcaecati cupiditate magnam alias, similique aperiam illo temporibus quisquam impedit nobis reprehenderit?</p>
          <button>read more</button>
        </div>
      </div>

    </div>
  )
}
