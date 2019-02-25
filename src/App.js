import React from "react";
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import HTML_1 from './Components/HTML_1';
import HTML_2 from './Components/HTML_2';
import HTML_3 from './Components/HTML_3';
import HTML_4 from './Components/HTML_4';
import HTML_5 from './Components/HTML_5';

import logo from './logo.png'
import NotFound from "./Components/NotFound";

const App = (props) => (
  <BrowserRouter>
    <div>   
      <Header className="head"/>
      <Aside />
    
      <Switch>
        <Route exact path="/" component={Home} />  
        <Route exact path="/co_potrafi_alexa" component={HTML_1} />
        <Route exact path="/prywatność_w_amazon_alexa" component={HTML_2} />
        <Route exact path="/pogaduszki_z_alexą" component={HTML_3} />
        <Route exact path="/gdzie_kupić_alexę" component={HTML_4} />
        <Route exact path="/czy_alexa_mówi_po_polsku" component={HTML_5} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

const Aside = () => (
  <div class="list-group">
    <Link className="list-group-item" to="/co_potrafi_alexa">Co potrafi Alexa? <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></Link>
    <Link className="list-group-item" to="/prywatność_w_amazon_alexa">Prywatność w Amazon Alexa?...<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></Link>
    <Link className="list-group-item" to="/pogaduszki_z_alexą">Pogaduszki z Alexą <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></Link>
    <Link className="list-group-item" to="/gdzie_kupić_alexę">Gdzie kupić Alexę? <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></Link>
    <Link className="list-group-item" to="/czy_alexa_mówi_po_polsku">Czy Alexa mówi po Polsku?<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></Link>
</div>
)


const Home = () => (
  <div className="main_container">
    <Helmet>
        <title>Amazon Alexa</title>
     </Helmet>
    <h1>Czym w ogóle jest Alexa? </h1>
    <p> Witajcie na mojej stronie internetowej, będącej nieoficjalnym fanpage Amazon Alexa. 
    Zacznijmy od tego, czym w ogóle jest Amazon Alexa. 
    Otóż, jest to wirtualny asystent, który słucha to, czego do niego mówimy i próbuje odpowiedzieć na nasze zapytania.  </p>
   <p>
    <p>
      Bez problemu odpowie, gdzie leży Polska albo kim jest Donald Trump. 
      Dodatkowo, Alexę można nauczyć pewnych dodatkowych sztuczek. Wystarczy, że z biblioteki aplikacji wybierzemy tę, która nas interesuje. 
      Przykładowo, chcemy znać najnowsze newsy z portalu Onet.pl. W takim przypadku możemy ściągnąc z internetu oficjalną aplikację Onet.pl i cieszyć się
      najnowszymi informacjami z kraju i zza granicy. Swoją aplikację stworzyło również RMF. 
    </p>
      Chcesz, aby Alexa grała ulubioną muzykę ze Spotify? Bez problemu! Odwiedź podstronę Co potrafi Alexa, aby dowiedzieć się więcej na ten temat. 
      Chcesz, aby Alexa ochroniła Cię przed złodziejami, odtwarzając muzykę imitującą dźwięk domowników? Nie ma problemu, są to tego darmowe dodatki do Alexy. 
    </p>
    <p>
      Mam nadzieję, że Cię zaciekawiłem. Oczywiście Alexa nie jest jedynym wirtualnym asystentem dostępnym na rynku. 
      Jej głównym konkurentem jest Google Assistant. Ale na rynku znajdziemy również asystentów od Apple czy też innych firm. 
    </p>
  </div>
)

const Header = () => (
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">

        <Link to="/">
          <img className="nav-logo"alt="Brand" src={logo}></img>
        </Link>
          
         
      </div>
      
    </div>
  </nav>
);

export default App;