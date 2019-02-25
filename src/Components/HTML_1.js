import React from 'react';
import { Helmet } from 'react-helmet'

const HTML1 = () => (
    <div className="main_container">
        <Helmet>
            <title>Co potrafi Alexa?</title>
        </Helmet>
        <h1>Co potrafi Alexa? </h1>
            <dl>
                <dt>Alexa jako wirtualny asystent jest w stanie zrobić wiele przydatnych rzeczy, a przy okazji zautomatyzować naszą pracę.</dt>
                <br></br>
                <dd>- Alexa może służyć za budzik. Po prostu mówimy, o której ma nas zbudzić. </dd> 
                <br></br>
                <dt>Alexa może kontrolować elementy inteligentnego domu:</dt>
                <br></br>
                <dd>-  Żarówki. Wystarczy powiedzieć “Alexa, turn on the lights” </dd>
                <dd>- Podgrzewacze temperatury. </dd>
                <dd>- Kamery</dd>
                <dd>- Smart odkurzacze</dd>
                <dd>- Telewizory</dd>
            </dl>    
           
            <p> -><a href="https://www.amazon.com/smart-home-devices/b?ie=UTF8&node=6563140011" target="_blank">Można by wymieniać długo. Zobacz sam na oficjalnej stronie Amazonu </a>{"<-"} </p> 
            
            <p> 
                W internecie można znaleźć informacje, że Alexa potrafi zadzwonić na wskazany numer / wskazany kontakt. Ale ja z tego nie korzystałem. 
                Być może ta funkcja jest ograniczona do użytkowników ze Stanów. 
            </p>

            <p>Pamiętajcie jednak, inteligentny dom to taki, w którym mieszkają inteligentni ludzie :) </p>   
            <br></br>
            <br></br>
            <h3>Współpraca z telewizorem</h3>
            <br></br>
            <br></br>
            <p>
                Telewizory radzą sobie świetnie z odtwarzaniem konkretnych programów, ale jest nieco gorzej z wyszukiwaniem konkretnych treści. 
                Co jeśli chcę na telewizorze pooglądać konkretną treść? 
                Robi się problematycznie. 
            </p>
           
            <p> Nie mogę po prostu wpisać tego na klawiaturze. </p>

            <p>
                Na szczęście coraz więcej urządzeń RTV ma moduły wyszukiwania głosowego. 
                Przykładowo, w Philipsie PU 7303 wystarczy, że kliknie się na przycisk wyszukiwania głosowego i wbudowany w Philipsa program rozpozna nasz dźwięk, wyszukując odpowiednią rzecz w serwisie Youtube. 
            </p>

            <p>Słyszałem, że telewizory LG radzą sobie równie dobrze z wyszukiwaniem głosowym, także po polsku. </p>

            <p>
                Można pójść o krok dalej: 
                Mianowicie, użyć asystenta Amazon Alexa do sterowania telewizorem.
            </p>
            <p>
                Czy Twój telewizor poprawnie współpracuje z Amazonem Alexą? 
                Łatwo się o tym przekonać. 
                Wystarczy, że wejdziemy na stronę Amazona i wpiszemy nazwę interesującego nas modelu.
                Przy telewizorach współpracujących z Alexą znajdziemy odpowiednią ikonkę informującą o tym, czy te urządzenia mogą ze sobą współgrać. 
            </p>    
            
      
    </div>
)

export default HTML1;