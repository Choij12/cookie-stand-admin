export default function ReportTable({storeList}) {
    return(
      <div className = "p-3 text-center">
      <p className='mt-6 text-center'> Report Table Coming Soon...</p> 
      <p className='mt-6'>{"{"}&quot;location&quot;:{storeList.location},&quot;minCustomers&quot;:{storeList.min_cust_per_hour},&quot;maxCustomers&quot;:{storeList.max_cust_per_hour},&quot;avgCookies&quot;:{storeList.avg_cookies_per_sale}{"}"}
      </p>
      </div>
    )
    }