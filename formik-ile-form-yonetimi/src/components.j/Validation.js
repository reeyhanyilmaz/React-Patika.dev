import { object, string, number, date, InferType, ref} from 'yup';
 
const Validation = object({
    // initial value key ne ise buradaki keylerde aynı ise eşleşiyor. Yani email0 password gibi...
    email: string().email("Geçerli bir email girin").required("Zorunlu Alan"), 
    // required(), demeseydik email kutusu boş olsa bile gönderirdi.
    password: string().min(5, "Parolanız en az 5 karekter olmalıdır.").required("Zorunlu Alan"),
    //oneOf metodu ile kontrol sağladık. referansımız password yani.
    passwordConfirm: string().oneOf([ref("password")], "Parolalar uyuşmuyor").required("Zorunlu Alan"),   
  });

export default Validation;