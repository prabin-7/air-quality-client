import React from "react";
import "../styles/Table.css"

interface Props {
    gasData: {
        smoke: string,
        lpg: string,
        co: string,
        created_at: string
    }[]
}

const Table: React.FC<Props> = ({gasData}) => {
    return (
        <div className="table-container" >
            <h2 style={{marginBottom:20}}>Data History</h2>
            <table>

            <tr className="title" >
                <th>Date</th>
                <th>Smoke</th>
                <th>LPG</th>
                <th>CO</th>
            </tr>
            {/* <div className="table-data" > */}
                
                {
                    gasData.map((data,i) =>  (
                        <tr key={i} className={`table-row`}>
                            <td>{data.created_at.split("T")[0]}   {new Date(data.created_at).toLocaleTimeString()}</td>
                            <td>{data.smoke}</td>
                            <td>{data.lpg}</td>
                            <td>{data.co}</td>
                        </tr>
                    ))
                }
            {/* </div> */}
                </table>
        </div>
    )
}

export default Table;