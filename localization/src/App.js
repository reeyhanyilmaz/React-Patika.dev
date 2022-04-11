import './App.css';
import {useState , useEffect} from 'react';

//farklı dilleri bir arada kullanabilmemizi saglıyor.
import {IntlProvider, FormattedMessage} from 'react-intl'

// const messages = {
//   "tr-TR" : {
//     title: "Merhaba Dünya",
//     description: "3 yeni mesajınız var!",
//   },

//   "en-US" : {
//     title: "Hello World",
//     description: "You have 3 new messages!",
//   },
// }

//parametre gecmek bölümü*****************************************************
const messages = {
    "tr-TR" : {
      title: "Merhaba Dünya",
      description: "{count} yeni mesajınız var!",
    },
  
    "en-US" : {
      title: "Hello World",
      description: "You have {count} new messages!",
    },
  }

function App() {
  // const [locale , setLocale] = useState("tr-TR");

  
  //defaultLocale bölümü************************************************
  const isLocale = localStorage.getItem("locale");

  const defaultLocale = isLocale ? isLocale : navigator.language;  //localstorage'da data varsa onu getir yoksa varsayılan dili kullan.
  console.log(defaultLocale); //varsayılan browser dilimizi ogrendik.

  const [locale , setLocale] = useState(defaultLocale);

  //dilimizi degistirdigimizde sayfa yenilenince varsayılan dile dönmesin diye localstorage'a kaydediyoruz.
  useEffect(() => {
    localStorage.setItem("locale" , locale) //ilki key ismi, ikinci state ismimiz.
  }, [locale])


  return (
    <div className="App">
      {/* IntlProvider component'i ile diger componentleri sarmalıyoruz. FormattedMessage kullanabilmmeiz icin provider ile sarmalanmalı cünkü provider bize data saglıyor (messages ile). Messages'a locale state'ini vererek dil gecisini saglıyoruz. Varsayılan yukarda TR tanımaldık ilk türkçe yazacak. */}
      <IntlProvider locale ={locale} messages={messages[locale]}> 

      {/* FormattedMessage'da ki id yukarda tanımladıgımız messagesdaki hangi key'i göstermek istiyorsa konu verecegiz. */}
      <FormattedMessage id="title"/>

      {/* <p>  <FormattedMessage id="description"/>   </p> */}


      {/* defaultLocale bölümü************************************************ */}
      <p>
        <FormattedMessage values={{count : 5}} id="description"/>
      </p> 

      <br /> <br />
      <button onClick={() => setLocale("tr-TR")}>TR</button>
      <button onClick={() => setLocale("en-US")}>EN</button>

      </IntlProvider>
    </div>
  );
}

export default App;
