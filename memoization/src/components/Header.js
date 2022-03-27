import React from 'react'

//React.memo - useMemo*******************
// function Header({number, data}) {
//   console.log("Header Component Re-rendered!")
//   return (
//     <div>Header - {number}

//       <br /><br />
      
//     <code>{JSON.stringify(data)}</code>
//     </div>
//   )
// }

//useCalback ****************************
function Header({number , increment}) {
  console.log("Header Component Re-rendered!")
  return (
    <div>Header - {number }
      <br /><br />

      <button onClick={increment} >Click</button>
    </div>
  )
}
export default React.memo(Header);
// React.memo gereksiz renderların önüne geçiyor. Sayfa tümüyle render olmaz sadece o an değişmesi gereken component değişir.