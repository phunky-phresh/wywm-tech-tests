// console.log('problem1');

const familyOfFour = (n, reservedSeats) => {
  let cinema = []
  let s = cinema.join('')
  // below loop constructs a nested array of all available seats in the cinema
  for (let i = 1; n >= i; i++) {
    cinema.push([i, 1], [i, 2], [i,3], [i,4], [i,5], [i,6], [i,7], [i,8], [i,9], [i,10])
  }
  // below methods convert each seat array into a seat number, then combined into one array and keeps only unique seats (removes reserved seats and keeps available seats)
  let newArray = []
 let resArr = reservedSeats.forEach( e => {
  let num = parseInt(e.join(''))
  newArray.push(num);
 })
 let cinArr = cinema.forEach( e => {
   let num = parseInt(e.join(''))
   newArray.push(num);
 })
 let sortedArr = newArray.sort(( a, b) => {
   return a - b
 })
const uniq = sortedArr.filter((i, p) => {
  return sortedArr.lastIndexOf(i) === sortedArr.indexOf(i);
})
  
  
  //count sequences of 4 with remaining array
  
 
}

familyOfFour( 3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]);
familyOfFour( 2, [[2,1], [1,8], [2,6]])
familyOfFour( 4, [[4,3],[1,4],[4,6],[1,7]])