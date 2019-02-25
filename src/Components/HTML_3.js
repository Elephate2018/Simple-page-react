import React from 'react';
import { Helmet } from 'react-helmet'

const HTML3 = () => (
    <div className="main_container">
        <Helmet>
            <title>Pogaduszki z Alexą</title>
        </Helmet>
        <h1>Pogaduszki z Alexą</h1>
        <p>Rozmowy z botem mogą być bardzo ciekawe. </p>
        <p>
            Zadałem Alexie pytanie, kim jest Donald Trump, oczywiście po angielsku.
            Niestety, 
            powiedziała mi, że nie zna żadnych kawałów o obecnym prezydencie Stanów Zjednoczonych. 
        </p>
        <p>
             Zadajmy Alexie pytanie związane z Gwiezdnymi Wojnami. 
        </p>
        <dl>
           
            <dt>
                Alexa, I am your father [Alexa, jestem Twoim ojcem]
            </dt>
            <dd>
               - Nooooo. That’s not true. That’s impossible. [Nie, to nie prawda. To niemożliwe!]
            </dd>  
            <dt>
             Alexa, what's the first rule of Fight Club? [Alexa, jaka jest najważniejsza reguła fight clubu?]
            </dt>
            <dd>
              - Don’t talk about fight club [Nigdy nie mów o fight clubie] 
            </dd>
            <br></br>
            Dosyć ciekawą odpowiedź Alexa ma przygotowaną na pytanie o tym, gdzie jest Chuck Norris. 
            <br></br>
            <dt>
            Alexa, where is Chuck Norris? [Alexa, gdzie jest Chuck Norris?]
            </dt>
            <dd>
               - If Chuck Norris wants you to know where he is, he'll find you. If he doesn't, youwon't know until it's too late
                [Gdy Chuck norris będzie chciał, żebyś wiedział, gdzie jest, to on Cię sam znajdzie. Jeśli nie będzie chciał, nie dowiesz się do czasu aż będzie zbyt późno :) 
            </dd>    
            <br></br>
            
                Teraz zadajmy pytanie:
           <br></br>
            <dt>         
            Alexa, is this the real life?  [Alexa, czy to się dzieje naprawdę]
                    
            Alexa odpowiada słowami piosenki: 
            </dt> 
           <dd> 
               Is this just fantasy, caught in a landslide, no escape from reality.
           </dd>
            <br></br>            
            Wiem, że to brzmi nieco dziwnie, ale polecam z ciekawości porozmawiać z Alexą, aby poznać jej “światopogląd”. 
            Na plus, że stara się unikać kontrowersyjnych tematów. Nie powie nam o kawałach o Trumpie. Nie powie nam, czy X jest lepsze od Y. 
           
        </dl>    
        <p>
            Ciekawe jest również, z jakiej bazy Alexa czerpie swoją “wiedze”. Jest oczywiste, że niemożliwe jest zaprogramowanie Alexy, aby odpowiadała na każde pytanie dokładnie w taki sposób, w jaki chcieli jej twórcy. Tych haseł po prostu jest za dużo. 
        </p>       
        <p> 
            Alexa więc odpowiadając na pytania, korzysta z ogólnodostępnych źródeł. Jak to działa? 
            Ktoś kiedyś napisał jakąś treść (zawierając wiedzę w książce lub na stronie internetowej) i później Alexa (lub jej główny konkurent - Google Home Assistant) badają, czy ta treść:
        </p>
        <ol>
            <li><p>Jest adekwatna do tego, czego użytkownik wyszukuje (yyy, prosi Alexę o odpowiedź :)</p></li>
            <li>
                <p>Zawiera wiarygodną treść. Jak oceniane jest, czy treść jest wiarygodna? <br></br>To jest pytanie, na któym nie znam odpowiedzi, ale planuję zgłębić to w najbliższym czasie.</p>
              

            </li>
        </ol>      
    </div>
)

export default HTML3;