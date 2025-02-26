import "./App.css";

import Perfil from "./components/perfil/perfil"
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import RodaPe from "./components/rodape/RodaPe";

export const App = () => {
  return (
    <div id="App" className=""> 
      <Perfil /> 
      <Switch />
      <ul> 
      <Links />
      <Links />
      <Links />
      <Links />
      </ul>

      <div id="socialLinks">
      <SocialLinks />
      <SocialLinks />
      <SocialLinks />
      <SocialLinks />
      </div>
    <RodaPe />
    </div>
  );
};

export default App