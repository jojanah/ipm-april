import React from "react";
import styles from '../../styles/Inclusive.module.css'
import 'react-calendar/dist/Calendar.css'
import { _OS, _CostLevel, _RelevantCabinetDecisions, _StrategicObjectives, _StrategicProgram, _percentage } from '../../utils/store';
import Select from "react-select";
import { isArr, handleEditObject, findIndexInArrayOfObjects } from "../../utils/utils";

function Main({ id, inclusive, setInclusive, employees, inclusiveYears, handleSubmit, isDisableEditing, nextWorkflow, isAllowChangeInclusiveStatus }) {

    return (
        <>
            <div className="pt-4 mb-3">
                <form onSubmit={(e) => { e.preventDefault(); }}  >
                    <div className={styles.nra_container}>
                        <div className="row">
                            <div className="col-12">
                                <div className="h4 fw-bold p-3 rounded bg-gray">البيانات الاساسية للمشروع</div>
                                <hr />
                            </div>

                            <div className="col-6"><p className="fw-bold">السنة</p></div>
                            <div className="col-6 ">
                                <select className="form-control" disabled={isDisableEditing} value={`${inclusive.year}`} onChange={e => setInclusive(handleEditObject(e.target.value, 'year', inclusive))}>
                                    <option value="">Select Year</option>
                                    {isArr(inclusiveYears).map((item, index) => <option key={index} value={item._id}>{item.year}</option>)}
                                </select>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold">المشروع/ النشاط (Project/ Activity) <span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="لإضافة مشروع جديد غير مدرج ، الرجاء تعبئة استمارة PID ومن ثم إشعار المختصين بدائرة الدراسات">!</span>
                                </p>
                            </div>
                            <div className="col-6 ">
                                <input value={inclusive?.projectTitle} disabled={isDisableEditing} onChange={(e) => { setInclusive(handleEditObject(e.target.value, 'projectTitle', inclusive)) }} type="text" title="welcome" className="form-control" />
                            </div>

                            <div className="col-6">
                                <p className="fw-bold">الأوامر السامية ذات العلاقة (إن وُجدت)
                                    (Relevant Royal Commands)
                                </p>
                            </div>
                            <div className="col-6">
                                <input value={inclusive?.relevantRoyalCommands} disabled={isDisableEditing} onChange={(e) => { setInclusive(handleEditObject(e.target.value, 'relevantRoyalCommands', inclusive)) }} type="text" className="form-control" />

                            </div>
                            <div className="col-6">
                                <p className="fw-bold">قرارات مجلس الوزراء ذات العلاقة (إن وُجدت)
                                    (Relevant Cabinet Decisions)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="القرارات الصادرة عن مجلس الوزراء الموقر حول تنفيذ برامج/ أو مشاريع معينة، وللقطاع ٤ قرارات ">؟</span>

                                </p> </div>
                            <div className={`col-6 ${styles.dropdownindex}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.relevantCabinetDecisions, value: inclusive?.relevantCabinetDecisions }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'relevantCabinetDecisions', inclusive)) }} options={_RelevantCabinetDecisions} />
                            </div>
                            <div className="col-6">
                                <p className="fw-bold">الهدف الإستراتيجي حسب رؤية عمان 2040
                                    (Oman Vision 2040 Strategic Objectives)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="برامج القطاع تخدم ٤ أهداف رئيسية لرؤية عمان ٢٠٤٠، تم توزيعها على البرامج الاستراتيجية">؟</span>
                                </p>
                            </div>
                            <div className={`col-6 ${styles.index4}`}>

                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.strategicObjectives, value: inclusive?.strategicObjectives }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'strategicObjectives', inclusive)) }} options={_StrategicObjectives} />

                            </div>
                            <div className="col-6">
                                <p className="fw-bold">البرنامج الاستراتيجي حسب الخطة الخمسية العاشرة
                                    (10th Five-Year Development Plan Strategic Program)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="برامج القطاع المعتمدة في الخطة الخمسية العاشرة (الواردة نصاً في مجلد آلية تنفيذ البرامج الاستراتيجية)، حيث وردت للقطاع ١٥ برنامج استراتيجي تخدم الأولوية الأولى من أولويات رؤية عمان ٢٠٤٠: التعليم والتعلم والبحث العلمي">؟</span>
                                </p>
                            </div>
                            <div className={`col-6 ${styles.index3}`}>

                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.planStrategicProgram, value: inclusive?.planStrategicProgram }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'planStrategicProgram', inclusive)) }} options={_StrategicProgram} />

                            </div>

                            <div className="col-6">
                                <p className="fw-bold">الأهداف الاستراتيجية للبرنامج
                                    (Program`s Strategic Objectives)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title=":لكل برنامج استراتيجي عدة أهداف استراتيجية، تم تحديدها مسبقاً من قبل الدوائر المعنية ">؟</span>

                                </p>
                            </div>
                            <div className="col-6">
                                <input disabled={isDisableEditing} value={inclusive?.programStrategicObjectives} onChange={(e) => { setInclusive(handleEditObject(e.target.value, 'programStrategicObjectives', inclusive)) }} type="text" className="form-control" />
                            </div>

                            <div className="col-6">
                                <p className="fw-bold">الهدف الرئيسي
                                    (main goal)  </p>
                            </div>
                            <div className="col-6">
                                <input disabled={isDisableEditing} value={inclusive?.mainGoal} onChange={(e) => { setInclusive(handleEditObject(e.target.value, 'mainGoal', inclusive)) }} type="text" className="form-control" />
                            </div>

                            <div className="col-6">
                                <p className="fw-bold">مستوى تكلفة البرنامج (Program`s Cost Level)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="تم تحديد تكلفة كل برنامج استراتيجي من قبل وزارة الاقتصاد">؟</span>

                                </p>
                            </div>
                            <div className={`col-6 ${styles.index2}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.programCostLevel, value: inclusive?.programCostLevel }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'programCostLevel', inclusive)) }} options={_CostLevel} />
                            </div>

                            <div className="col-6">
                                <p className="fw-bold">النسبة المستهدفة (Target percentage)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="النسبة المستهدفة لكل سنة">؟</span>
                                </p>
                            </div>
                            <div className={`col-6 ${styles.index1}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.targetPercentage, value: inclusive?.targetPercentage }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'targetPercentage', inclusive)) }} options={_percentage} />
                            </div>

                            <div className="col-6">
                                <p className="fw-bold">
                                    المديرية المعنية
                                    (Diroctorate Owner)</p>
                            </div>
                            <div className="col-6 ">
                                <Select isDisabled={isDisableEditing}
                                    onChange={({ label, value }) => setInclusive(handleEditObject(label, 'diroctorateOwner', inclusive))}
                                    value={{ label: inclusive.diroctorateOwner, value: inclusive.diroctorateOwner }}
                                    options={_OS.map((item, index) => { return { label: item.label, value: index } })} />

                            </div>
                            {inclusive?.diroctorateOwner == '' ? null :
                                <>
                                    <div className="col-6">
                                        <p className="fw-bold">الدائرة المعنية
                                            (Department Owner)</p>
                                    </div>
                                    <div className="col-6 ">
                                        <Select isDisabled={isDisableEditing} onChange={({ label, value }) => {
                                            setInclusive(handleEditObject(label, 'department', inclusive));
                                        }}
                                            value={{ label: inclusive.department, value: inclusive.department }}
                                            options={isArr(_OS[findIndexInArrayOfObjects(_OS, 'label', inclusive?.diroctorateOwner)]?.department).map((item, index) => { return { label: item, value: item } })} />
                                    </div>
                                </>}

                            <div className="col-6">
                                <p className="fw-bold">رئيس المشروع project leader
                                </p>
                            </div>
                            <div className="col-6 ">

                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.projectLeader?.username, value: inclusive?.projectLeader?._id }}
                                    onChange={(e) => { setInclusive(handleEditObject({ username: e?.label, _id: e?.value }, 'projectLeader', inclusive)) }}
                                    options={employees.map(item => { return { label: item.username, value: item._id } })} />

                            </div>

                            <div className="col-6">
                                <p className="fw-bold">معتمد المشروع project approver
                                </p>
                            </div>
                            <div className="col-6 ">
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.projectApprover?.username, value: inclusive?.projectApprover?._id }}
                                    onChange={(e) => { setInclusive(handleEditObject({ username: e?.label, _id: e?.value }, 'projectApprover', inclusive)) }}
                                    options={employees.map(item => { return { label: item.username, value: item._id } })} />
                            </div>

                            <div className="col-6">
                                <p className="fw-bold">معتمد المشروع النهائي  Final project approver
                                </p>
                            </div>
                            <div className="col-6 ">
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.finalProjectApprover?.username, value: inclusive?.finalProjectApprover?._id }}
                                    onChange={(e) => { setInclusive(handleEditObject({ username: e?.label, _id: e?.value }, 'finalProjectApprover', inclusive)) }}
                                    options={employees.map(item => { return { label: item.username, value: item._id } })} />
                            </div>
                        </div>

                    </div>
                </form >
            </div >
            {isDisableEditing && !isAllowChangeInclusiveStatus ? null : <div className="shadow p-3 mt-3 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.829)' }}>
                {isDisableEditing ? null : <button className="btn btn-success" onClick={() => handleSubmit()}>حفظ</button>}
                {isAllowChangeInclusiveStatus ? isArr(nextWorkflow).map((item, index) => <button key={index} className={`btn btn-${item?.color} mr-2 ml-2`} onClick={() => handleSubmit(item?.name)}>{item?.label}</button>) : null}
            </div>}
            {/* {isDisableEditing ? null : <div className="shadow p-3 mt-3 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.829)' }}>
                <button className="btn btn-success" onClick={() => handleSubmit()}>حفظ</button>
            </div>} */}

        </>
    );
}
export default Main;


