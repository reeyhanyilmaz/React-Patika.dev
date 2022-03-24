import style  from "./style.module.css";

console.log("B:" , style);
function B() {
  return (
    <div className={style.title}>B</div>
  )
}

export default B;