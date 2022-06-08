import { useState } from 'react'

export default function Home() {
  let [state, setState] = useState( {data: []});
  return (
    <div>
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>
        <CookieStandForm onSubmit={inputHandler} />
        <Main data={state}/>
        </main>
      <Footer copywright= '2022' />
    </div>
  );

  function inputHandler(event){
    event.preventDefault();
    let store = {
      Location : event.target.Location.value,
      minCustomers: parseInt(event.target.MinimumPerHour.value),
      maxCustomers: parseInt(event.target.MaximumPerHour.value),
      avgCookies: parseFloat(event.target.AverageCookiesPerHour.value),
    }
    setState(store);
    event.target.reset();
  }
}

function Header(){
  return <header className="px-8 py-6 text-4xl bg-emerald-500 text-black">
    <h1>Cookie Stand Admin</h1>
  </header>
}

function Main(props){
  return(
    <main className="flex flex-col items-center py-y pt-6 space-y-8">
      <p className="text-sm text-gray-500">Report Table Coming Soon...</p>
      <DisplayJson data={props.data} />
      </main>
  )
}

function CookieStandForm(props){
    return (
      <form className='grid grid-rows-2 w-1/2 p-2 bg-emerald-300 rounded-md my-10' onSubmit={props.onSubmit}>
        <h1 className='flex justify-center py-3 text-2xl'>Create Cookie Stand</h1>
        <div className="grid col-span-2">
          <label>Location </label>
          <input name='location' className='flex-auto w-full' placeholder='Location' required />
        </div>
        <div className='flex flex-row'>
          <div className='grid col-span-'>
          </div>
          <div className='space-x-5'>
            <label>Minimum Customers per Hour </label>
            <input name='minCustHr' className='flex-bottom' placeholder='Minimum Customers per Hour' required />
            <label>Maximum Customers per Hour </label>
            <input name='maxCustHr' className='flex-auto' placeholder='Maximum Customers per Hour' required />
            <label>Average Cookies per Sale </label>
            <input name='avgCookiesSale' className='flex-auto' placeholder='Average Cookies per Sale' required />
            <button className='px-4 py-2 bg-emerald-500 m-2'>Create</button>
          </div>
        </div>
      </form>
    )
  }

function DisplayJson(props) {
  return (
    <div>
      {JSON.stringify(props.data) == '{"data":[]}' ? (
        "Enter Cookie Data"
      ) : (
        <p className="text-sm tracking-widest text-gray-500">
          {JSON.stringify(props.data)}
        </p>
      )}
    </div>
  );
}

function Footer({ copywright }) {
  return (
    <footer className="px-8 py-6 bg-emerald-500 text-black">
      <p>&copy;{copywright}</p>
    </footer>
  )
}
