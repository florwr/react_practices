import { useRef } from "react"
// import { getActiveToken } from "./getActiveToken";

function App () {
  const inputRef=useRef();
  const handleInput=()=>{
    // const {value, selectionEnd=0}=inputRef.current
    // // const {word}=getActiveToken(value, selectionEnd)
    // // const shouldOpenAutocomplete
  
  }

  return (
    <main className='container'>

      <section className='box'>
        <div className='box-body'>

          <aside className='box-avatar'>
            <img src='https://i.pinimg.com/564x/c8/56/b2/c856b2aa1353ec1fc0f400c51fe66d97.jpg' alt='hola' />
          </aside>

          <div className='box-compose'>
            <form>
              <textarea
                placeholder='¿Qué está pasando?'
                className='box-textbox'
                onKeyUp={handleInput}
                ref={inputRef}
              />
            </form>

          </div>
        </div>

        <footer className='box-footer'>
          <button type='submit' className='tweet-button'>
            Twittear
          </button>
        </footer>

      </section>
    </main>
  )
}

export default App