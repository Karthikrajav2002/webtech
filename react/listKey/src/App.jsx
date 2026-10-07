import Card from "./components/Card"
let App=()=>{
  let subjects=[HTML,CSS,javascript,React,nodejs]

  let emp=[{ename:'alex',eid:101,sal:20000},
    {ename:blake,eid:105,sal:30000},
    {ename:raja,eid:106,sal:70000},
    {ename:sanjay,eid:110,sal:65000}
  ]
  return(
    <>
    <h1>list and key</h1>{
    subjects.map((ele)=>{
      <li></li>
    })}
    <main>
    {
      emp.map((ele)=>{
        return <div key={ele.eid}>
          <h3>ename : {ele.ename}</h3>
          <h4>eid: {ele.eid}
          </h4>
          <h4>sal : {sal}</h4>
        </div>
      })
    }

    </main>
    <hr/>
    <h1>
      displaying array element by using props
    </h1>
    <section>
      {
        emp.map((ele)=>{
          return (
            <Card ename={ele.ename} sal= {ele.sal} eid={ele.eid} key={ele.eid}/>
          )
        })
      }
    </section>
    
    </>
  )
}

export default App