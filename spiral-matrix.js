function matrix(n) {
  const results= [];

  for(let i = 0; i<n; i++){
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n -1;
  let startRow = 0;
  let endRow = n -1;

  while (startColumn <=   endColumn && startRow <= endRow){
     //top row
     for(let i = startColumn;
     i <= endColumn;
     i++
     ){
       results[startRow][i] = counter;
       counter ++
     }

     startRow++
     //end row
     for(let i = startRow;
     i<=endRow;
     i++){
       results[i][endColumn]=counter

       counter++
     }
     endColumn --;
     //bottom row

     for(let i = endColumn;i >= startColumn; i--){
       results[endRow][i] = counter;
       counter ++
     }
     endRow --

     //startColumn
     for(let i = endRow; i>= startRow;i--){
       results[i][startColumn]= counter;
       counter ++;
     }
     startColumn++
  }
  return results
}

console.log(matrix(10))
