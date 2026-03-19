import React from 'react'

const Event = () => {
  function ClickedBtn() {
    console.log("button is Clicked")
  }

  function mouseEnter() {
    console.log("Mouse is Enter")
  }

  function inputTyping() {
    console.log('User is Typing')
  }

  const onScrollPage = (elem) => {
    if (elem > 0) {
      console.log('Sedha Scrolling hogaya he')
    } else {
      console.log("Ulta Scrolling hogaya he")
    }
  }



  return (
    <>
      <div>
        <h1>Sana Ullah Siddiqui</h1>
        <button onClick={ClickedBtn}>Click Me</button>
        <button onDoubleClick={ClickedBtn}>Click Me</button>
        <button onMouseEnter={mouseEnter}>Click Me</button>
        <button onMouseEnter={mouseEnter} onClick={ClickedBtn}>Click Me</button>
        <div>
          <input onMouseEnter={mouseEnter} onChange={inputTyping} type="text" placeholder='write now' />
          <input type="text"
            onChange={function (type) {
              console.log(type.target.value)
            }} />

        </div>
        <div style={{ backgroundColor: "red", height: "200px", padding: "20px", margin: "20px", borderRadius: "20px" }}
          onMouseMove={(elem) => {
            console.log(elem.clientY);
            console.log(elem.clientX)
          }}>
        </div>
        <div className="pageparent"
          onWheel={(elem) => {
            onScrollPage(elem.deltaY)
          }}
        >
          <div className='page1'></div>
          <div className='page2'></div>
          <div className='page3'></div>
        </div>
      </div>
    </>
  )
}

export default Event
