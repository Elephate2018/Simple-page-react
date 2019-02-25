import React from 'react';
import { Helmet } from 'react-helmet'

const HTML5 = () => (
    <div className="main_container">
         <Helmet>
            <title>Czy Alexa mówi po Polsku?</title>
        </Helmet>
        <h1>Czy Alexa mówi po Polsku?</h1>
        <p>Ktoś mi kiedyś powiedział, że polski język jest jednym z najtrudniejszych na świecie. 
            Niestety, Amazon Alexa nie jest w stanie porozumiewać się po polsku.
            Najprościej będzie się dogadać z tym produktem Amazonu za pomocą języka niemieckiego lub angielskiego. 
    
        </p> 
        <p>   
            Ale: 
            Nadam możemy korzystać z aplikacji dedykowanych Polakom.  Przykładowo możemy ściągnąc apkę Onetu, która umożliwia prezentowanie newsów znad Odry. 
        </p>
    </div>
)

export default HTML5;