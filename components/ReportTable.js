export default function ReportTable({hours,storeList}) {
    function getStoreList() {
      if (storeList.length === 0 ) {
        return <h2 className="flex mx-auto px-96">No Cookie Stands Available</h2>
      }
      else {
        return <Table hours={hours} storeList={storeList} />
      }
    }
    return (
      <>
        {getStoreList()}
      </>
    )
  
    function Table({hours, storeList}) {
      return(
        <table className="w-11/12 mx-auto mt-8 rounded-md bg-emerald-500">
          <thead>
            <tr>
              <th> 
                Location
              </th>
              {hours.map((hour) => (<th key={hour}>{hour}</th>))}
              <th>
                Totals
              </th>
            </tr>
          </thead>
          <tbody>
            {storeList.map(store =>(
              <tr key={store.id} className="odd:bg-emerald-400 even:bg-emerald-300">
                <td className="pl-2 border border-black bg ">
                  {store.location}
                </td>
                {store.hourly_sales.map(sale =>
                <td key={sale} className="pl-2 border border-black ">
                  {sale}
                </td>
                )}
                <td className="pl-2 border border-black ">
                {store.hourly_sales.reduce((prev,curr) => prev + curr, 0)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="pl-2 font-bold border border-black bg-emerald-500">
                Totals
              </td>
              {hours.map((hour, idx)=> (
                <td key ={hour} className="pl-2 font-bold border border-black">
                  {storeList.reduce((prev, curr) => prev + curr.hourly_sales[idx], 0
                  )}
                </td>
              ))}
              <td>
                {hours.map((hour, idx) => storeList.reduce((prev, curr) => prev + curr.hourly_sales[idx],0
                  )
                ).reduce((prev, curr)=> prev + curr,0)
                }
              </td>
            </tr>
          </tbody>
        </table>
      )
    }
  }