/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    // console.log(strs[0].split('').sort().join('') )
    let arrayByKey = [
        // {'test': []},
        // { 'aet': ['val', 'val2'] }
    ]

    for (i = 0; i < strs.length; i++) {
        let rowKey = strs[i].split('').sort().join('')

        let findIndex = arrayByKey.findIndex((obj) => {
            // console.log(Object.keys(obj)[0], '=>' ,Object.values(obj))
            return (Object.keys(obj)[0] == rowKey)
        })

        // console.log(findIndex)
        if (findIndex > -1) {
            arrayByKey[findIndex][rowKey].push(strs[i])
        } else {
            arrayByKey.push({ [rowKey]: [strs[i]] })
        }
    }

    // console.log(arrayByKey)

    let result = []

    arrayByKey.forEach(obj => {
        result = result.concat(Object.values(obj)) // .push(Object.values(obj))
    })
    return result
};