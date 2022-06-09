import Head from 'next/head'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import {hours} from './data'
import {useState} from 'react'

export default function CookieStandAdmin() {

  const [storeList, setStoreList] = useState([])
  

  function handleCreate(event) {
    event.preventDefault();
    
    const storeLists = {
      location:event.target.location.value,
      min_cust_per_hour:event.target.min_cust_per_hour.value,
      max_cust_per_hour:event.target.max_cust_per_hour.value,
      avg_cookies_per_sale: event.target.avg_cookies_per_sale.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      id: storeList.length
    }

    setStoreList([...storeList, storeLists])
  }
  
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='p-6 bg-emerald-50'>
        <CreateForm handleCreate={handleCreate} />
        <ReportTable hours={hours} storeList={storeList} /> 
      </main>
      <Footer totalLocations={storeList.length}/>
      
    </div>
  )
}