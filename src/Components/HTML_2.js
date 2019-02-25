import React from 'react';
import { Helmet } from 'react-helmet'

const HTML2 = () => (
    <div className="main_container">
        <Helmet>
            <title>Prywatność w Amazon Alexa</title>
        </Helmet>
        <h1>Prywatność w Amazon Alexa</h1>
        <p>
            Przechodzimy do bardzo drażliwej kwestii: prywatność. 
            Wiele witryn śledzi każdy nasz ruch w internecie. Gigantyczne korporacje mają dostęp do coraz większej ilości informacji o nas. 
        </p>
        <p>
            Alexa nie wysyła w świat każdej naszej rozmowy. 
            Jej mechanizm można podzielić na dwie metody: 
            Pierwsza: preprocessing. Alexa na pierwszy ogień wystawia bardzo prosty mechanizm rozpoznawania słowa-klucza: “Alexa”. 
        </p>
        <p>
            Jeśli Alexa usłyszy słowo-klucz “Alexa”, od tej pory dane są wysyłane w świat. 

        </p>
        <p>
            Myślę, że to jest dosyć proste do sprawdzenia. 
            Gdyby Alexa słuchała każdej rozmowy i wysyłała dane w świat, to można by było łatwo sprawdzić, badając aktywność sieciową urządzenia (czy wysyła pakiety IP).
        </p>  
        <p>   
            Swego czasu była głośna afera, że Alexa podsłuchała rozmowę pewnej pary w Stanach Zjednoczonych, ale to był raczej jednostkowy przypadek. 
        </p>
        <p>
            Uważam, że na chwilę obecną Amazon nie może sobie pozwolić na aferę z podsłuchiwaniem. Ale co będzie z rok, za 10 lat? Na to pytanie niestety nie jestem w stanie odpowiedzieć. 
        </p>
    </div>
)

export default HTML2;