class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for (let s of strs){
            const convers=s.split("").sort().join("")
            if(!res[convers]){
                res[convers]=[]

            }
           res[convers].push(s)
        }
        return Object.values(res)
    }
}
