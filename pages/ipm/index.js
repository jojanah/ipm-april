import React, { useState, useEffect } from "react";
import axios from 'axios'
import { isEmail, isNumeric } from 'validator'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { api, basePath } from "../../utils/constent";
import Loader from '../../components/loader'

function Registration() {

    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    // validate all fields
    const validate = () => {
        if (!name) { Notify.failure('name field cannot be empty.'); return }
        if (!jobTitle) { Notify.failure('job title field cannot be empty.'); return }
        if (!isEmail(email)) { Notify.failure('Email is not valid'); return }

        return true;
    }

    const handleSubmit = () => {
        if (validate() == undefined) return;


        const data = {
            name, jobTitle, email
        }
        setIsLoading(true)
        console.log(data);

        axios.post(`${api}/ipm`, data)
        .then((res) => {
          setIsLoading(false);
          Notify.success('Added successfully.');
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
      
          // Safely check if err.response exists
          const errorMessage = err.response?.status === 403
            ? err.response?.data || 'Forbidden'
            : 'Failed to save.';
      
          Report.failure(errorMessage, '', 'Okay');
        });
      
    }
    return (
        <>

            {isSuccess ? <div className={`alert alert-success p-3 ${styles.center_div}`}>شكرا على المشاركة</div> : <>
                <Loader isLoading={isLoading} />
                <div className='text-center mt-5'>
                    <img src={`${basePath}/images/MOHERI.png`} width="200 px" height="150 px" />
                </div>

                <div className="container pt-4 ">

                    <p className="h3 text-center mt-3"> Annual Research Forum 2024</p>
                    <div className="custom-box">
                        <form onSubmit={(e) => { e.preventDefault(); }}  >
                            <div className="form-group">
                                <label>Name</label>
                                <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" placeholder="Name" />
                            </div>

                            <div className="form-group">
                                <label >job title</label>
                                <input onChange={(e) => { setJobTitle(e.target.value) }} type="text" className="form-control" placeholder="job title" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} type="text" className="form-control" placeholder="Email" />
                            </div>


                            <br ></br>
                            <br />

                            <button type="submit" className="btn btn-primary float-right" onClick={handleSubmit}>submit</button>
                            <button className="btn btn-warning float-left" onClick={() => { window.print() }}>Print</button>

                        </form>
                    </div>
                </div>
            </>}

        </>
    )

}

export default Registration;
