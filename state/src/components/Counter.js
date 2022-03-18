//rfce kısayolu ile direk import export func. olusumunu hazırlayabiliriz.

import {useState} from 'react'

function Counter() {
    //count biizm component icin degisecek bi veri o yüzden state olur.
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

  return (
    <div>
        <h1>{count}</h1> 
        {/* 0 degil de yukarıda state atadık onu yerine koyabiliriz. */}

        {/* <button onClick={ () => setCount( count - 1)} >Decrease </button>
        <button onClick={ () => setCount( count + 1)} >İncrease</button> */}


        {/* onClick içinde yapmak istemezsek eğer,  dışarıdan tanımlı fun içinden aldığımız degerle de yaapbiliriz. */}
        <button onClick={decrease} >Decrease </button>
        <button onClick={increase} >İncrease</button>
        <button onClick={ () => setCount(0)}> Reset </button>

    </div>
  )
};

export default Counter