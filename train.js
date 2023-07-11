var table = [1,2,5,6,7,8,9,10,11,15,20,21,22,23,24];

function search(tab,target,start=0,end=tab.length){
    if(start>=end){
        console.log("not found")
        return -1
    }
    let middle = Math.floor((start+end)/2)

                if(tab[middle]===target){
                     console.log(`Target ${tab[middle]} has been found at ${middle}`)
                     return middle
                }
               else if(tab[middle]>target){

                    return search(tab,target,start,middle-1)
                }
                else{

                    return search(tab,target,middle+1,end)
                }
}
console.log(search(table,15))
