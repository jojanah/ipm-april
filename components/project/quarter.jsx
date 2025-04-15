
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { api, basePath } from "../../utils/constent";
import axios from "axios";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from '../../styles/Inclusive.module.css'
import Nav from '../../components/nav'
import { _ReadinessLevel, _ProjectStatus, _StatusListliysf, _challengType, _quartersList, _percentage, defaultQuarterObj } from '../../utils/store';
import { isArr, handleEditObjectInArray, handleAddItemToArray, handleRemoveItemFromArray, handleEditObject } from "../../utils/utils";


function Quarter({ inclusiveYears, inclusive, setIsLoading }) {
    const [selectedQuarter, setSelectedQuarter] = useState(0)
    const [selectedYear, setSelectedYear] = useState('')
    const [quarter, setQuarter] = useState(defaultQuarterObj)
    const [isDisableEditing, setIsDisableEditing] = useState(true)
    const [isAllowChangeStatus, setIsAllowChangeStatus] = useState(false)
    const [isQuarterOpen, setIsQuarterOpen] = useState(false)
    const [nextWorkflow, setNextWorkflow] = useState([])


    const handleSelectQuarter = () => {
        if (selectedYear == '' || selectedQuarter == '') return
        axios.get(`${api}/inclusive/quarter`, { headers: { inclusiveid: inclusive._id, yearid: selectedYear, qourternumber: selectedQuarter }, withCredentials: true })
            .then(res => {
                const { nextWorkflow, isAllowToUpdate, quarter, isAllowChangeQuarterStatus, isQuarterOpen } = res.data;
                setIsDisableEditing(!isAllowToUpdate);
                setNextWorkflow(isArr(nextWorkflow));
                setIsAllowChangeStatus(isAllowChangeQuarterStatus);
                setIsQuarterOpen(isQuarterOpen);
                if (quarter) setQuarter(quarter)
                else setQuarter(defaultQuarterObj)
            })
            .catch(e => { console.log(e); Notify.failure('something went wrong') })
    }

    const updateQuarter = (status) => {
        let obj = { ...quarter, inclusive: inclusive._id, quarterNumber: selectedQuarter, year: selectedYear }
        if (status) obj.status = status

        setIsLoading(true);
        axios.post(`${api}/inclusive/quarter`, obj, { withCredentials: true })
            .then(res => { setIsLoading(false); Notify.success('update successfully.'); handleSelectQuarter() })
            .catch(e => {
                setIsLoading(false);
                Notify.failure('something went wrong')
                console.log(e)
            })
    }

    useEffect(() => { if (selectedQuarter != 0) handleSelectQuarter() }, [selectedQuarter])
    useEffect(() => { setSelectedQuarter(0) }, [selectedYear])




    return (
        <>
            <div className=" pt-4 mb-3">
                <form onSubmit={(e) => { e.preventDefault(); }}  >

                    <div className={styles.nra_container}>
                        <div className="h4 fw-bold p-3 rounded bg-gray" onClick={() => console.log({ quarter, selectedYear, isDisableEditing, isAllowChangeStatus, isQuarterOpen, nextWorkflow })} > تحديثات الربع</div>
                        <div className="row">
                            <div className="col-12">
                                <hr />
                                <div className="m-3 text-center" dir="rtl" >
                                    <select className="form-control" onChange={e => setSelectedYear(e.target.value)}>
                                        <option value="">Select Year</option>
                                        {isArr(inclusiveYears).map((item, index) => <option key={index} value={item._id}>{item.year}</option>)}
                                    </select>
                                </div>
                                {selectedYear == '' ? null : <div className="m-3 text-center" dir="rtl" >
                                    <button className={`btn btn-light border ${selectedQuarter == 1 ? 'bg-gray' : ''} ${styles.w25}`} onClick={() => setSelectedQuarter(1)}> الأول</button>
                                    <button className={`btn btn-light border ${selectedQuarter == 2 ? 'bg-gray' : ''} ${styles.w25}`} onClick={() => setSelectedQuarter(2)}> الثاني</button>
                                    <button className={`btn btn-light border ${selectedQuarter == 3 ? 'bg-gray' : ''} ${styles.w25}`} onClick={() => setSelectedQuarter(3)}> الثالث</button>
                                    <button className={`btn btn-light border ${selectedQuarter == 4 ? 'bg-gray' : ''} ${styles.w25}`} onClick={() => setSelectedQuarter(4)}> الرابع</button>
                                </div>}
                            </div>

                            {selectedQuarter == 0 || selectedYear == '' ? <div className="alert alert-light text-center p-3 m-3 col-12">الرجاء اختيار السنة و الربع</div> : <>

                                {!isQuarterOpen && !quarter?._id ?
                                    <div className="alert alert-light text-center p-3 m-3 col-12">هذا الربع مغلق</div>
                                    :
                                    <>
                                        <div className="col-6">
                                            <p className="fw-bold rtl">حالة المشروع
                                                (Project Status)
                                            </p>
                                        </div>
                                        <div className={`col-6 ${styles.dropdownindex}`}>
                                            <Select isDisabled={isDisableEditing} value={{ label: quarter?.innerStatus, value: quarter?.innerStatus }} onChange={(e) => { setQuarter(handleEditObject(e.label, 'innerStatus', quarter)) }} options={_ProjectStatus} />
                                        </div>


                                        <div className="col-12">
                                            <p className="fw-bold rtl"> نسبة الانجاز لكل ربع
                                                (Percentage of completion for each quarter) </p>


                                            {
                                                isArr(quarter?.percentageAchievement).map((item, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <br />
                                                            <div className="col-12" >
                                                                <div className="input-group">
                                                                    <select disabled={isDisableEditing} onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'name', quarter?.percentageAchievement, i), 'percentageAchievement', quarter))} value={item.percentageAchievement} className="form-control">
                                                                        <option value=""></option>
                                                                        {isArr(inclusive?.percentageAchievement).map((item, index) => <option value={item?.name} key={index}>{item?.name}</option>)}
                                                                    </select>
                                                                    <select disabled={isDisableEditing} onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'no', quarter?.percentageAchievement, i), 'percentageAchievement', quarter))} value={item.percentageAchievement} className="form-control">
                                                                        <option value=""></option>
                                                                        {isArr(inclusive?.percentageAchievement).map((item, index) => <option value={item?.no} key={index}>{item?.no}</option>)}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="col-12">
                                            <p className="fw-bold">الإجراءات الرئيسية الفعلية للمشروع
                                                (Main Tasks)     </p>

                                            {
                                                isArr(quarter?.tasks).map((item, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <br />
                                                            <div className="col-12" >
                                                                <div className="input-group">
                                                                    <select disabled={isDisableEditing} onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'mainTask', quarter?.tasks, i), 'tasks', quarter))} value={item.mainTask} className="form-control">
                                                                        <option value=""></option>
                                                                        {isArr(inclusive?.tasks).map((item, index) => <option value={item?.mainTask} key={index}>{item?.mainTask}</option>)}
                                                                    </select>
                                                                    {/* <input type="text" disabled={isDisableEditing} className="form-control" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'mainTask', quarter?.tasks, i), 'tasks', quarter))} value={item.mainTask} name='mainTask' placeholder="المرحلة" /> */}
                                                                    {/* <input type="text" className="form-control" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'departmentOwner', quarter?.tasks, i), 'tasks', quarter))} value={item.departmentOwner} name='departmentOwner' placeholder="الجهة المعنية" /> */}
                                                                    <input type="date" disabled={isDisableEditing} className="form-control" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'startDate', quarter?.tasks, i), 'tasks', quarter))} value={item.startDate?.toString()?.substring(0, 10)} name='startDate' placeholder="تاريخ البدء" />
                                                                    <input type="date" disabled={isDisableEditing} className="form-control" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'endDate', quarter?.tasks, i), 'tasks', quarter))} value={item.endDate?.toString()?.substring(0, 10)} name='endDate' placeholder="تاريخ الانتهاء" />
                                                                    {isDisableEditing ? null : <>{i === 0 ?
                                                                        <button className="btn btn-info" onClick={() => setQuarter(handleEditObject(handleAddItemToArray({ mainTask: '', departmentOwner: '', startDate: '', endDate: '' }, quarter?.tasks), 'tasks', quarter))}>+</button>
                                                                        :
                                                                        <button className="btn btn-danger" onClick={() => setQuarter(handleEditObject(handleRemoveItemFromArray(i, quarter?.tasks), 'tasks', quarter))}>-</button>
                                                                    }</>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <br></br>
                                        <br></br>

                                        <div className="col-12">
                                            <p className="fw-bold">التحديات (Challenges)
                                            </p>
                                        </div>
                                        <div className="col-12"  >
                                            {
                                                isArr(quarter?.challeng).map((item, i) => {
                                                    return (
                                                        <div className="input-group row" key={i}>
                                                            <input disabled={isDisableEditing} type="text" className="form-control col-md-5" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'name', quarter?.challeng, i), 'challeng', quarter))} value={item.name} name='name' placeholder="التحدي" />
                                                            <Select isDisabled={isDisableEditing} className="w-100 col-md-3 p-0" value={{ label: quarter.challeng[i]?.type, value: quarter.challeng[i]?.type }} onChange={(e) => { setQuarter(handleEditObject(handleEditObjectInArray(e.label, 'type', quarter?.challeng, i), 'challeng', quarter)) }} options={_challengType} placeholder="نوع التحدي" />

                                                            {
                                                                quarter.challeng[i]?.type == 'خارجي' ?
                                                                    <input disabled={isDisableEditing} type="text" className="form-control col-md-3" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'organization', quarter?.challeng, i), 'challeng', quarter))} value={item.organization} name='organization' placeholder="اذكر الجهة" />
                                                                    : null
                                                            }
                                                            {isDisableEditing ? null : <div className="col-md-1 p-0">
                                                                {i === 0 ?
                                                                    <button className="btn btn-info" onClick={() => setQuarter(handleEditObject(handleAddItemToArray({ name: '', type: '', organization: '' }, quarter?.challeng), 'challeng', quarter))}>+</button>
                                                                    :
                                                                    <button className="btn btn-danger" onClick={() => setQuarter(handleEditObject(handleRemoveItemFromArray(i, quarter?.challeng), 'challeng', quarter))}>-</button>
                                                                }
                                                            </div>}
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                        <br></br>
                                        <div className="col-12">
                                            <p className="fw-bold">الانجازات  (Achievement)
                                            </p>
                                        </div>
                                        <div className="col-12"  >
                                            {
                                                isArr(quarter?.achievement).map((item, i) => {
                                                    return (
                                                        <div className="input-group row" key={i}>
                                                            <input disabled={isDisableEditing} type="text" className="form-control col-md-5" onChange={(e) => setQuarter(handleEditObject(handleEditObjectInArray(e.target.value, 'name', quarter?.achievement, i), 'achievement', quarter))} value={item.name} name='name' placeholder="الانجاز" />
                                                            {isDisableEditing ? null : <div className="col-md-1 p-0">
                                                                {i === 0 ?
                                                                    <button className="btn btn-info" onClick={() => setQuarter(handleEditObject(handleAddItemToArray({ name: '' }, quarter?.achievement), 'achievement', quarter))}>+</button>
                                                                    :
                                                                    <button className="btn btn-danger" onClick={() => setQuarter(handleEditObject(handleRemoveItemFromArray(i, quarter?.achievement), 'achievement', quarter))}>-</button>
                                                                }
                                                            </div>}
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>


                                        <div className="col-6">
                                            <p className="fw-bold">مقدار الصرف المالي
                                                (Money Spent) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.moneySpent} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'moneySpent', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">المبلغ المالي المتبقي
                                                (Remaining Balance)</p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.remainingBalance} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'remainingBalance', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">مستهدف العام الحالي(ما تود تحقيقه)
                                                (Year target) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.yearTarget} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'yearTarget', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">المستهدف عند تقديم البيانات للربع
                                                (Quarter target) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.quarterTarget} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'quarterTarget', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">المحقق الفعلي عند تقديم البيانات
                                                (Quarter achievement) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.quarterAchievement} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'quarterAchievement', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">نسبة الإنجاز مقارنة بالمستهدف عند تقديم البيانات%
                                                (The percentage of achievement compared to the target when submitting data %) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.percentageOfAchievementData} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'percentageOfAchievementData', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">نسبة الانجاز مقارنة بالمستهدف لعام
                                                (The percentage of achievement compared to the target for the year) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.percentageOfAchievementYear} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'percentageOfAchievementYear', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold"> التقييم (من1- 4)
                                                (Evaluation) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.evaluationF} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'evaluationF', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">مبررات التقييم
                                                (Evaluation justifications) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.evaluationJustifications} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'evaluationJustifications', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">أسباب الأداء بشكل عام
                                                (Reasons for performance) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.performanceReasons} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'performanceReasons', quarter)) }} type="text" className="form-control" />

                                        </div>
                                        <div className="col-6">
                                            <p className="fw-bold">توضيح أسباب الأداء
                                                (Explaining the reasons for performance) </p>
                                        </div>
                                        <div className="col-6 ">
                                            <input disabled={isDisableEditing} value={quarter?.performanceExplain} onChange={(e) => { setQuarter(handleEditObject(e.target.value, 'performanceExplain', quarter)) }} type="text" className="form-control" />

                                        </div>
                                    </>
                                }

                            </>}
                        </div>
                    </div >
                </form >
            </div >
            {(isDisableEditing && !isAllowChangeStatus) || !isQuarterOpen ? null : <div className="shadow p-3 mt-3 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.829)' }}>
                {isDisableEditing ? null : <button className="btn btn-success" onClick={() => updateQuarter()}>حفظ</button>}
                {isAllowChangeStatus ? isArr(nextWorkflow).map((item, index) => <button key={index} className={`btn btn-${item?.color} mr-2 ml-2`} onClick={() => updateQuarter(item?.name)}>{item?.label}</button>) : null}
            </div>}

        </>
    )
}

export default Quarter