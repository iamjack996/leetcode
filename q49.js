/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arrayByKey = []

    for (i = 0; i < strs.length; i++) {
        let rowKey = strs[i].split('').sort().join('')

        let findIndex = arrayByKey.findIndex((obj) => {
            // console.log(Object.keys(obj)[0], '=>' ,Object.values(obj))
            return (Object.keys(obj)[0] == rowKey)
        })

        if (findIndex > -1) {
            arrayByKey[findIndex][rowKey].push(strs[i])
        } else {
            arrayByKey.push({ [rowKey]: [strs[i]] })
        }
    }

    let result = []
    arrayByKey.forEach(obj => {
        result = result.concat(Object.values(obj)) // .push(Object.values(obj))
    })
    return result
};