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
            <div className="title" >
                <h3>Date</h3>
                <h3>Smoke</h3>
                <h3>LPG</h3>
                <h3>CO</h3>
            </div>
            <div className="table-data" >
                
                {
                    gasData.map((data,i) =>  (
                        <div key={i} className={`table-row`}>
                            <h4>{data.created_at.split("T")[0]}</h4>
                            <h4>{data.smoke}</h4>
                            <h4>{data.lpg}</h4>
                            <h4>{data.co}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Table;