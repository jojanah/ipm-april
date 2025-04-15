import React, { useState, useEffect } from "react";
import axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { api } from "../utils/constent";

function ExcelExport({ collection_name }) {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [showbtn, setShowbtn] = useState(false);


    const filterExportAttributes = () => {
        let url = `${api}/download/xlsx/${collection_name}/${startDate}/${endDate}`
        downloadExcelFile(url)
    }

    const FormatDate = (d) => {
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        return `${curr_date}-${curr_month}-${curr_year}`;
    }

    const downloadExcelFile = url => window.open(url)

    return (

        <div >

            <button type="button" className="btn btn-primary btn-sl button-style" ria-pressed="true" onClick={() => setShowbtn(prev => !prev)} >Export</button>


            {
                showbtn == true ?

                    <div className="p-3 m-3 shadow border border-radios bg-light">

                        <div className="row">
                            <div className="col-4">
                                <label>From Date(DD/MM/YYYY)</label>
                            </div>
                            <div className="col-8">
                                {/* <Calendar onChange={setDate} value={date} /> */}
                                <input type="date" className="form-control mb-1" onChange={e => setStartDate(FormatDate(new Date(e.target.value)))}></input>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>To Date(DD/MM/YYYY)</label>
                            </div>
                            <div className="col-8">
                                {/* <Calendar onChange={setDate} value={date} /> */}
                                <input type="date" className="form-control mb-1" onChange={e => setEndDate(FormatDate(new Date(e.target.value)))}></input>

                            </div>

                        </div>

                        <div className="text-center mt-3">
                            <button className="btn btn-success" onClick={filterExportAttributes}>export</button>
                        </div>

                    </div > : null}
        </div >
    )
}

export default ExcelExport