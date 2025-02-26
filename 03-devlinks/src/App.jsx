import "./App.css";
import fotoLight from "./img/IMAGENS/eu.jpg"
import fotoDark from "./img/IMAGENS/star girl.jpg"

import Perfil from "./components/perfil/perfil"
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import RodaPe from "./components/rodape/RodaPe";
import { useState } from "react";

export const App = () => {
  const [ isLight, setIsLight ] = useState(false);
  

  const troca = () =>{
    setIsLight(!isLight);
  };
  return (
    <div id="App" className={isLight ? "light" : ""}> 
    <div id="container">
      <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>
        @Ana_Katsumata
        </Perfil>
     
      <Switch troca={troca} isLight={isLight} />

      <ul> 
      <Links link={"https://github.com/anasouza-senai"}>GitHub</Links>
      <Links link={"https://instgram.com/dailydakatsumata"}>Instagram</Links>
      <Links link={"https://br.pinterest.com/katsumata_"}>Pinterest</Links>
      <Links link={"https://open.spotify.com/playlist/2USDqlKMSSGVpx5IXsGEJO"}>Spotify</Links>
      </ul>

      <div id="socialLinks">
      <SocialLinks 
      link={"https://github.com/anasouza-senai"}
      icon={"logo-github"}
      />
      <SocialLinks 
      link={"https://instgram.com/dailydakatsumata"}
      icon={"logo-instagram"}
      />
      <SocialLinks
      link={"https://br.pinterest.com/katsumata_"}
      icon={"logo-pinterest"}
       />
      <SocialLinks 
      link={"https://open.spotify.com/playlist/2USDqlKMSSGVpx5IXsGEJO"}
      icon={"musical-notes-outline"}
      />
      </div>
    <RodaPe>Ana_Katsumata</RodaPe>
    </div>
    </div>
  );
};

export default App