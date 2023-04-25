
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Header from './components/Header'
import LiveCounter from './components/LiveCounter'

import io from "socket.io-client";
import Table from './components/Table';
const socket = io(import.meta.env.VITE_SERVER_ENDPOINT);

interface SensorDataType {
  lpg_val: string | null, 
  co_val: string | null,
  smoke_val: string | null
}

interface TableData {
  
      smoke: string,
      lpg: string,
      co: string,
      created_at: string
  
}

function App() {
  
  const run = useRef(true)
  const run2 = useRef(true)

  const [gasData, setGasData] = useState<SensorDataType>({
      co_val: null,
      lpg_val: null,
      smoke_val: null
  })

  const [tlData, setTlData] = useState<TableData[] | null>(null) 

  useEffect(() => {
    if(run.current)
    socket.on("sensorData", (data: SensorDataType) => {
      console.log("DATA", data)
      setGasData({
        co_val: data.co_val,
        lpg_val: data.lpg_val,
        smoke_val: data.smoke_val
      })
    })
    return () => {run.current = false}
  }, [socket])

  useEffect(() => {
      if(run2.current)
      socket.on("tableData", (tblData: TableData[]) => {
        console.log(tblData)
        setTlData(tblData)
      })
      return () => {run2.current = false}
  })



  return (
    <>
        <div className='main'>
            <Header />
          <div className='live-counter-wrapper' >
            {gasData.smoke_val === null && gasData.co_val === null && gasData.lpg_val === null && <h2>Loading</h2>}
            {gasData.smoke_val !== null && gasData.co_val !== null && gasData.lpg_val !== null && <LiveCounter smoke={gasData.smoke_val} lpg={gasData.lpg_val} co={gasData.co_val} />}
          </div>

          <div className="table-wrapper">
            {tlData === null && <h2>Loading</h2>}
            {tlData !== null && <Table gasData={tlData} />}
          </div>
        </div>
    </>
  )
}

export default App
