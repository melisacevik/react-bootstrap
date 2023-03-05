import ReactDOM from 'react-dom/client';
import Sol from './Sol';
import Giris_form from './Giris_form';
import Kayit_form from './Kayit_form';
import Sss from './Sss';
import Basvur from './Basvur';

import {basliklar, icerikler, sorular, cevaplar,user} from './Icerik';
import FormBilgi from './FormBilgi';
import Sag from './Sag'; 

 //GİRİŞ KONTROL
export const girisKontrol = () => {


    var kullanici = sessionStorage.getItem("user");

    if(kullanici == null){
        sessionStorage.setItem("user","");
    }

    var isLogin = false;
        
    kullanici = sessionStorage.getItem("user");
    const kullanici_ayrik = kullanici.split(",");


    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru!"; 
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici_ayrik[0];

        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

        document.getElementById("logout_Btn").style.display = "block";
        

    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }


}

//ÇIKIŞ KONTROL
export const logout = () => {

    var isLogin = sessionStorage.getItem("isLogin");
  
    isLogin = false;
  
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "block";
    document.getElementById("header_sag").innerHTML = "";
  
  }

  //GOSTER - RENDER
export const goster = (eleman, eleman_index) => {

    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    const sag = ReactDOM.createRoot(document.getElementById("sag"));
  
    if(eleman == "Eğitimler"){
      sol.render(
        <Sol 
          baslik = {basliklar[eleman_index]} 
          icerik = {icerikler[eleman_index]} 
        /> 
      )
  
    }
    else if(eleman == "Hemen Başvur"){
      sol.render(
        <Basvur />
      )
    }
    else if(eleman == "S.S.S."){
      sol.render(
        <>
        <h1>{basliklar[eleman_index]}</h1>
  
        {sorular.map((Q, soru_index) =>   
          (<Sss
              soru={Q} 
              cevap={cevaplar[soru_index]}
          />)
          )}
        </>
      )
    }
    else if(eleman == "giris"){
      sag.render(
        <Giris_form />
      )
    }
    else if(eleman == "kayit"){
      sag.render(
        <Kayit_form />
      )
    }
        
    
  }

  //FORM GÖNDER
  export const gonder = () => {



    var name = document.getElementById("inputName").value;
    var mail = document.getElementById("inputMail").value;
    var date = document.getElementById("date").value;
    var selectElement = document.getElementById("selectEducation");
    var selectedValue = selectElement.value;

    var user_info = [name, mail,selectedValue,date];

    sessionStorage.setItem("user_info", user_info);
    const form = sessionStorage.getItem("user_info");
    const form_ayrik = form.split(",");

    const sag = ReactDOM.createRoot(document.getElementById("sag"));
    // var sendForm = sessionStorage.getItem("user_info");

    // if(sendForm == "true"){
    
          sag.render(
            <>
            <h1>{basliklar[3]}</h1>
      
            {user.map((title,index)   =>   
              (<FormBilgi
                  userTitle={title} 
                  infoValue={user_info[index]}
              />)
              )}
            </>
          )
        
        
      

      
  
  }