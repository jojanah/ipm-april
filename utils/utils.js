import { validateImage } from "image-validator";
module.exports = {
    isArr: arr => Array.isArray(arr) ? arr : [],
    isEmp: str => {
        if (typeof str === 'string') return str.trim() == ''
        else return false
    }, changeValueInObj: (value, type, state) => {
        let result = { ...state }
        result[type] = value
        return result
    },
    fileExtension: (filename) => filename?.split('.')?.pop(),
    isFileTypeAllowed: async (file) => module.exports.fileExtension(file?.name) == 'pdf' || await validateImage(file),
    isFilesPassedValidation: async (files) => {
        let status = true
        let messege = ``
        await Promise.all(files.map(async fileObj => {
            const { file, attributeName } = fileObj
            if (status) {
                const maxFileSize = 3072 * 100 * 10;
                const isFileTypeAllowed = await module.exports.isFileTypeAllowed(file)
                const isFileEmpty = file === ""
                const isSizeExceed = file.size > maxFileSize
                if (isFileEmpty) { messege = `${attributeName} cannot be empty.`; status = false }
                if (!isFileTypeAllowed) { messege = `${attributeName} file type is not allowed, please select PDF or Image.`; status = false; }
                if (isSizeExceed) { messege = `${attributeName} size must be less than 3 MB.`; status = false }
            }
        }))
        return { messege, status }
    },
    handleEditObject: (value, keyName, obj) => {
        let result = { ...obj }
        result[keyName] = value
        return result
    },
    handleEditObjectInArray: (value, keyName, array, index) => {
        let arr = [...array]
        let obj = { ...arr[index] }
        obj[keyName] = value
        arr[index] = obj
        return arr
    },

    handleAddItemToArray: (defaultObject, Array) => [...module.exports.isArr(Array), defaultObject]
    ,
    handleRemoveItemFromArray: (index, array) => {
        let arr = [...module.exports.isArr(array)]
        arr.splice(index, 1)
        return arr

    },
    handleCheckbox: (array, value) => {
        const indexOfVariable = array.findIndex(item => item == value)
        const isVariableExistsInArray = indexOfVariable != -1
        if (isVariableExistsInArray) array.splice(indexOfVariable, 1)
        else array.push(value)
        return array
    },
    isItemInArray: (array, value) => {
        const indexOfVariable = array.findIndex(item => item == value)
        const isVariableExistsInArray = indexOfVariable != -1
        return (isVariableExistsInArray)
    },

    findIndexInArrayOfObjects: (array, keyName, valueToFind) => {
        let arr = module.exports.isArr(array)
        if (arr.length == 0) console.log('findIndexInArray => array is empty');
        return arr.findIndex(x => x[keyName] === valueToFind)
    },
    filterPermition: (userRole, status, isProjectLeader, isProjectApprover, isFinalProjectApprover, isStaff, pageName) => {

        // <option value="sendtoProjectApproval">إرسال للموافق  على المشروع</option>
        // <option value="ApprovedByProjectApproval">موافق عليه من الموافق للمشروع</option>
        // <option value="RejectedByProjectApproval">مرفوض من الموافق للمشروع</option>
        // <option value="sendtoFinalProjectApproval">إرسال للموافقة النهائية</option>
        // <option value="ApprovedByFinalProjectApproval">موافق عليه</option>
        // <option value="RejectedByFinalProjectApproval">مرفوض</option>

        if (isStaff && pageName == 'main') return true
        if (status == 'for project leader' && isProjectLeader && pageName == 'details') return true
        if (status == 'for project approver' && isProjectApprover && pageName == 'details') return true
        if (status == 'for final project approver' && isFinalProjectApprover && pageName == 'details') return true


        return false
    },
    isDate: (date) => {
        return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
    }
}