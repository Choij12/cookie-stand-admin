export default function LoginForm({ onLogin }) {

    function handleSubmit(event) {
        event.preventDefault();
  
        onLogin(event.target.username.value, event.target.password.value)
      }
  
      return (
        <div className="w-8/12 m-3 mx-auto border-2 border-solid p-7 rounded-xl bg-emerald-300 border-emerald-500">
        <form onSubmit={handleSubmit} >
        <fieldset>
            <label className="block m-2 mt-0 font-bold text-center" htmlFor="username">USER NAME</label>
            <input className="block w-full p-2 m-2 mx-auto" type="text" name="username" placeholder="User Name"></input>
            
            <label className="block m-2 mt-5 font-bold text-center" htmlFor="password">PASSWORD</label>
            <input className="block w-full p-2 m-2 mx-auto" type="password" name="password" placeholder="Password"></input>
  
            <button className="block w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>
          </fieldset>
    
        </form>
        
        </div>
      )
  }