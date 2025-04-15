import React, { useEffect } from "react";
import styles from '../../styles/Inclusive.module.css'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { api, basePath } from "../../utils/constent";
import Select from "react-select";
import { isArr, handleEditObjectInArray, handleAddItemToArray, handleRemoveItemFromArray, handleEditObject, findIndexInArrayOfObjects, handleCheckbox, isItemInArray, filterPermition } from "../../utils/utils";
import { _ReadinessLevel, _ProjectStatus, _BudgetType, _BudgetTypeResource, _ProjectDuration, _FundingSource, _OS, _relatedTasks, _role, _quartersList, _percentage } from '../../utils/store';



function Details({ id, inclusive, setInclusive, role, userId, handleSubmit, isDisableEditing, isAllowChangeInclusiveStatus, nextWorkflow }) {
    return (
        <>
            <div className="pt-4 ">
                <form onSubmit={(e) => { e.preventDefault(); }}  >
                    <div className={styles.nra_container}>
                        <div className="row">
                            <div className="col-12">
                                <div className="h4 fw-bold p-3 rounded bg-gray">تفاصيل المشروع</div>
                                <hr />
                            </div>
                        </div>
                        <div className="row"  >
                            <div className="col-12">
                                <p className="fw-bold">المهام والاختصاصات ذات العلاقة
                                    (Related Tasks & Competences)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="هي اختصاصات الوزارة الصادرة في مرسوم رقم ٩٨-٢٠٢٠  وعليه يجب تحديد الاختصاصات التي يحققها كلمشروع من قبل رئيس المشروع">؟</span>
                                </p>
                            </div>
                        </div>

                        {
                            isArr(inclusive?.relatedTasks).map((item, i) => {
                                return (<div className="row mt-2 mb-2" key={i}>
                                    <div className="col-6" >
                                        <div className="input-group ">
                                            <div className="col-11 p-0 ">
                                                <Select isDisabled={isDisableEditing} className="w-100" value={{ label: inclusive.relatedTasks[i]?.name, value: inclusive.relatedTasks[i]?.name }} onChange={(e) => { setInclusive(handleEditObject(handleEditObjectInArray(e.label, 'name', inclusive?.relatedTasks, i), 'relatedTasks', inclusive)) }} options={_relatedTasks} />

                                            </div>

                                            {isDisableEditing ? null : <div className="col-1 pr-0">
                                                {i === 0 ?
                                                    <button className="btn btn-info" onClick={() => setInclusive(handleEditObject(handleAddItemToArray({ name: '' }, inclusive?.relatedTasks), 'relatedTasks', inclusive))}>+</button>
                                                    :
                                                    <button className="btn btn-danger" onClick={() => setInclusive(handleEditObject(handleRemoveItemFromArray(i, inclusive?.relatedTasks), 'relatedTasks', inclusive))}>-</button>
                                                }
                                            </div>}

                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <br />





                        <div className="row">
                            <div className="col-12">
                                <p className="fw-bold">أهداف المشروع(Project`s Objectives)  <span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="الرجاء كتابة الأهداف بشكل واضح ومختصر">؟</span>
                                </p>
                            </div>
                        </div>


                        {
                            isArr(inclusive?.objectives).map((item, i) => {
                                return (<div className="row mt-2 mb-2" key={i}>
                                    <div className="col-6" >
                                        <div className="input-group ">
                                            <div className="col-11 p-0 ">
                                                <input disabled={isDisableEditing} type="text" className="form-control" value={item.name} onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'name', inclusive?.objectives, i), 'objectives', inclusive))} name='name' placeholder="الهدف" />
                                            </div>
                                            {isDisableEditing ? null : <div className="col-1 pr-0">
                                                {i === 0 ?
                                                    <button className="btn btn-info" onClick={() => setInclusive(handleEditObject(handleAddItemToArray({ name: '' }, inclusive?.objectives), 'objectives', inclusive))}>+</button>
                                                    :
                                                    <button className="btn btn-danger" onClick={() => setInclusive(handleEditObject(handleRemoveItemFromArray(i, inclusive?.objectives), 'objectives', inclusive))}>-</button>
                                                }
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">حالة المشروع
                                    (Project Status)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title=":مُفعل (Ongoing): وهي المشاريع المستمر تنفيذها كل عام.
متوقف (On hold): وهي المشاريع التي توقفت لأي سبب كان (غياب الكوادر البشرية، نقص الموارد المالية، عطل فني/ نقص معدات.
مُؤجل (Delayed): وهي المشاريع التي تم تأجيلها بناءً على توجيهات إدارية أو تغير أولويات الدائرة.
قيد التخطيط (Under Planning): وهي المشاريع الغير المعتمدة والتي ما زالت في مرحلة التخطيط.
قيد الاعتماد (Under Approval): وهي المشاريع التي أنهت مرحلة التخطيط وانتقلت للاعتماد النهائي سواءً من قبل سعادة الوكيل، معالي الوزيرة، مجلس الوزراء
جديد (New): وهي المشاريع الجديدة المعتمدة والتي يتم تنفيذها لأول مرة.">؟</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.defaultStatus, value: inclusive?.defaultStatus }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'defaultStatus', inclusive)) }} options={_ProjectStatus} />

                            </div>
                        </div>
                        <br />
                        <p className="fw-bold">مستوى الجاهزية التكنولوجية
                            (Technology Readiness Level)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="  تطوير المعرفة: يشمل: تدوين الفكرة الأساسية، وضع مفهوم التقانة والتطبيق، التحليل النظري للفكرة ومواصفات النموذج الأولي
تطوير التقانة: يشمل تجريب مكونات النموذج في المختبر، المصادقة على النموذج الأولي، وتجربته في البيئة الحقيقية
تطوير الأعمال: الأنشطة ذات الصلة بتوجيه المنتج الى السوق من اعتماد المنتج إلى مرحلة الإنتاج الكمي، ويشمل: المصادقة على النموذج في البيئة الحقيقية، وإثبات فعالية التقانة في البيئة التشغيلية">؟</span>
                        </p>

                        <div>
                            <input disabled={isDisableEditing} type="checkbox" checked={isItemInArray(inclusive?.readinessLevel, 'تطوير المعرفة')} name="تطوير المعرفة" value={1} onChange={() => setInclusive(handleEditObject(handleCheckbox(inclusive?.readinessLevel, 'تطوير المعرفة'), 'readinessLevel', inclusive))} /> تطوير المعرفة <br />
                            <input disabled={isDisableEditing} type="checkbox" checked={isItemInArray(inclusive?.readinessLevel, 'تطوير التقانة')} name="تطوير التقانة" value={2} onChange={() => setInclusive(handleEditObject(handleCheckbox(inclusive?.readinessLevel, 'تطوير التقانة'), 'readinessLevel', inclusive))} /> تطوير التقانة <br />
                            <input disabled={isDisableEditing} type="checkbox" checked={isItemInArray(inclusive?.readinessLevel, 'تطوير الأعمال')} name="تطوير الأعمال" value={3} onChange={() => setInclusive(handleEditObject(handleCheckbox(inclusive?.readinessLevel, 'تطوير الأعمال'), 'readinessLevel', inclusive))} /> تطوير الأعمال <br />

                        </div>

                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold"> نسبة الانجاز لكل ربع
                                    (Percentage of completion for each quarter) </p>
                            </div>
                        </div>

                        <div className="row mt-2" >
                            <div className="col-12"  >
                                {
                                    isArr(inclusive?.percentageAchievement).map((item, i) => {
                                        return (
                                            <div className="input-group row" key={i}>
                                                <Select isDisabled={isDisableEditing} className="w-100 col-md-3 p-0" value={{ label: inclusive.percentageAchievement[i]?.name, value: inclusive.percentageAchievement[i]?.name }} onChange={(e) => { setInclusive(handleEditObject(handleEditObjectInArray(e.label, 'name', inclusive?.percentageAchievement, i), 'percentageAchievement', inclusive)) }} options={_quartersList} placeholder="الربع" />
                                                <Select isDisabled={isDisableEditing} className="w-100 col-md-3 p-0" value={{ label: inclusive.percentageAchievement[i]?.no, value: inclusive.percentageAchievement[i]?.no }} onChange={(e) => { setInclusive(handleEditObject(handleEditObjectInArray(e.label, 'no', inclusive?.percentageAchievement, i), 'percentageAchievement', inclusive)) }} options={_percentage} placeholder="نسبة الإنجاز لكل ربع" />

                                                {isDisableEditing ? null : <div className="col-md-1 p-0">
                                                    {i === 0 ?
                                                        <button className="btn btn-info" onClick={() => setInclusive(handleEditObject(handleAddItemToArray({ name: '', no: '' }, inclusive?.percentageAchievement), 'percentageAchievement', inclusive))}>+</button>
                                                        :
                                                        <button className="btn btn-danger" onClick={() => setInclusive(handleEditObject(handleRemoveItemFromArray(i, inclusive?.percentageAchievement), 'percentageAchievement', inclusive))}>-</button>
                                                    }
                                                </div>}
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">الموازنة الإجمالية السنوية للمشروع
                                    (Year Total Budget)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="هي الموازنة المعتمدة بجميع مصادر التمويل، وإن كان المشروع قيد الاعتماد/ التخطيط،يُرجى وضع الموازنة التقديرية إن وُجدت مع ذكر أنها (غير معتمدة)، وإن كان لا يتطلب موازنة يُرجى وضع (-)">؟</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 ">
                                <input disabled={isDisableEditing} value={inclusive?.totalBudget} onChange={(e) => { setInclusive(handleEditObject(e.target.value, 'totalBudget', inclusive)) }} type="text" className="form-control" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">قيمة الموازنة الإجمالية للمشروع (للمشروع المخطط إنجازه في أكثر من سنة)
                                    (Total Budget- more than one year)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="هي الموازنة المعتمدة بجميع مصادر التمويل، وإن كان المشروع قيد الاعتماد/ التخطيط،يُرجى وضع الموازنة التقديرية إن وُجدت مع ذكر أنها (غير معتمدة)، وإن كان لا يتطلب موازنة يُرجى وضع (-)">؟</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 ">
                                <input disabled={isDisableEditing} value={inclusive?.totalBudgetForYear} onChange={(e) => { setInclusive(handleEditObject(e.target.value, 'totalBudgetForYear', inclusive)) }} type="text" className="form-control" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">نوع الموازنة
                                    (Budget Type)
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-6 ${styles.dropdownindex}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.budgetTypeResource?.name, value: inclusive?.budgetTypeResource?.name }}
                                    onChange={(e) => { setInclusive(handleEditObject(handleEditObject(e.label, 'name', inclusive?.budgetTypeResource), 'budgetTypeResource', inclusive)) }}
                                    options={_BudgetTypeResource} />

                            </div>
                        </div>
                        <div className="row">
                            {inclusive?.budgetTypeResource?.name == 'آخرى' ?
                                <>
                                    <div className="col-6">
                                        <input disabled={isDisableEditing}
                                            onChange={(e) => { setInclusive(handleEditObject(handleEditObject(e.target.value, 'other', inclusive?.budgetTypeResource), 'budgetTypeResource', inclusive)) }
                                            } value={inclusive?.budgetTypeResource?.other} type="text" className="form-control" placeholder="اذكر نوع الموازنة" />
                                    </div>
                                </>
                                : null}


                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">حالة الموازنة
                                    (Budget Status)
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-6 ${styles.index4}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.budgetStatus, value: inclusive?.budgetStatus }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'budgetStatus', inclusive)) }} options={_BudgetType} />
                            </div>
                        </div>

                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">مصدر الموازنة
                                    (Budget Resource)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="يجب تحديد مصدر تمويل المشروع/ النشاط، والتي تم تصنيفها كالتالي:
الوزارة (MOHERI): تمويل كلي من الوزارة
القطاع الحكومي (Government): تمويل كلي من القطاع الحكومي فقط (لا يشمل موازنة الوزارة)
القطاع الخاص (Private): تمويل كلي من القطاع الخاص فقط
شراكة بين الوزارة والقطاع الخاص: تمويل مشترك بين الوزارة والقطاع الخاص
شراكة بين القطاع الحكومي والخاص: تمويل مشترك بين مؤسسة حكومية وخاصة (لا يشمل تمويل الوزارة)
منح ومعونات: مثل صناديق الوقف أو تمويل جلالة السلطان أو مساهمات دولية، مثل كراسي السلطان قابوس الدوليةالتي تم تمويلها مسبقاً من قبل مركز السلطان قابوس العالي للثقافة
">؟</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-6 ${styles.index3}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.budgetType, value: inclusive?.budgetType }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'budgetType', inclusive)) }} options={_FundingSource} />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">جهات التمويل الخارجية (إن وُجدت)
                                    (External Funding Bodies)
                                </p>
                            </div>
                        </div>

                        {
                            isArr(inclusive?.externalFunding).map((item, i) => {
                                return (<div className="row mt-2 mb-2" key={i}>
                                    <br />
                                    <div className="col-6" >
                                        <div className="input-group">
                                            <input disabled={isDisableEditing} type="text" className="form-control" onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'name', inclusive?.externalFunding, i), 'externalFunding', inclusive))} value={item.name} name='name' placeholder="جهة التمويل" />
                                            <input disabled={isDisableEditing} type="text" className="form-control" onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'cost', inclusive?.externalFunding, i), 'externalFunding', inclusive))} value={item.cost} name='cost' placeholder="نسبة التمويل" />
                                            {isDisableEditing ? null : <>{i === 0 ?
                                                <button className="btn btn-info" onClick={() => setInclusive(handleEditObject(handleAddItemToArray({ name: '', cost: '' }, inclusive?.externalFunding), 'externalFunding', inclusive))}>+</button>
                                                :
                                                <button className="btn btn-danger" onClick={() => setInclusive(handleEditObject(handleRemoveItemFromArray(i, inclusive?.externalFunding), 'externalFunding', inclusive))}>-</button>
                                            }</>}
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <br />

                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">مدة المشروع،بالاشهر
                                    (Project Duration, months)<span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title=" مدة تنفيذ المشروع/ النشاط (منذ بدء تنفيذه وحتى مرحلة الإغلاق)، إذا أن بعض المشاريع المفعلة  يتم تنفيذها كل عام  فيتم اختيار 12 شهر">؟</span> </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-6 ${styles.index2}`}>
                                <Select isDisabled={isDisableEditing} value={{ label: inclusive?.projectDuration, value: inclusive?.projectDuration }} onChange={(e) => { setInclusive(handleEditObject(e.label, 'projectDuration', inclusive)) }} options={_ProjectDuration} />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold">الإجراءات الرئيسية المخطط لها
                                    (Main Tasks)    <span className="btn btn-light border rounded-circle" style={{ cursor: 'unset', padding: '2px 5px 2px 5px' }} data-toggle="tooltip" title="الرجاء الرجوع للدليل الموجود بالمنصة للاطلاع على المثال التوضيحي">؟</span> </p>
                            </div>
                        </div>
                        <div className="row">
                            {
                                isArr(inclusive?.tasks).map((item, i) => {

                                    return (
                                        <div key={i}>
                                            <br />
                                            <div className="col-12" >
                                                <div className="input-group">
                                                    <input disabled={isDisableEditing} type="text" className="form-control" onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'mainTask', inclusive?.tasks, i), 'tasks', inclusive))} value={item.mainTask} name='mainTask' placeholder="المرحلة" />
                                                    {/* <input type="text" className="form-control" onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'departmentOwner', inclusive?.tasks, i), 'tasks', inclusive))} value={item.departmentOwner} name='departmentOwner' placeholder="الجهة المعنية" /> */}
                                                    <input disabled={isDisableEditing} type="date" className="form-control" onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'startDate', inclusive?.tasks, i), 'tasks', inclusive))} value={item.startDate?.toString()?.substring(0, 10)} name='startDate' placeholder="تاريخ البدء" />
                                                    <input disabled={isDisableEditing} type="date" className="form-control" onChange={(e) => setInclusive(handleEditObject(handleEditObjectInArray(e.target.value, 'endDate', inclusive?.tasks, i), 'tasks', inclusive))} value={item.endDate?.toString()?.substring(0, 10)} name='endDate' placeholder="تاريخ الانتهاء" />
                                                    {isDisableEditing ? null : <>{i === 0 ?
                                                        <button className="btn btn-info" onClick={() => setInclusive(handleEditObject(handleAddItemToArray({ mainTask: '', departmentOwner: '', startDate: '', endDate: '' }, inclusive?.tasks), 'tasks', inclusive))}>+</button>
                                                        :
                                                        <button className="btn btn-danger" onClick={() => setInclusive(handleEditObject(handleRemoveItemFromArray(i, inclusive?.tasks), 'tasks', inclusive))}>-</button>
                                                    }</>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        <div>
                        </div>
                    </div>
                </form >
            </div >
            {isDisableEditing && !isAllowChangeInclusiveStatus ? null : <div className="shadow p-3 mt-3 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.829)' }}>
                {isDisableEditing ? null : <button className="btn btn-success" onClick={() => handleSubmit()}>حفظ</button>}
                {isAllowChangeInclusiveStatus ? isArr(nextWorkflow).map((item, index) => <button key={index} className={`btn btn-${item?.color} mr-2 ml-2`} onClick={() => handleSubmit(item?.name)}>{item?.label}</button>) : null}
            </div>}

        </>
    );
}
export default Details;

