import PropTypes from "prop-types";


function User({name , surname , age, isLoggedIn, friends, address }){
    // if(!isLoggedIn){
    //     return <div> Giriş yapmadınız</div> //early return (erken return) yapılıyor. Doğrudan component render edilir.
    // }
    

    return (
        <>

         <h1>
           {isLoggedIn ? `${name} 
           ${surname} (${age})` : "Giriş yapmadınız!"}
        </h1>

        {address.title} {address.zip}

        <br />
        <br />


        {friends && friends.map((friend) => (
            <div key={friend.id}> {friend.name} </div>
        ))}
        </>      
    );
}

//Prop types***********
//burada genel kullanım için türlerini belirtiyoruz. Farklı bi tanımlama yapılırsa hata verir.
User.propTypes = {
    name: PropTypes.string.isRequired, // isRequired zorunlu alan demek.
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // birden fazla type belirledik age'e
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number, 
    }),
};

//defaut olarak prop ataması yapabiliriz.
User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false
}

export default User; 