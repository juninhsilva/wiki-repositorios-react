import { useState } from "react";
import Image from "../components/Image"; 
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

import logo from '../assets/logo.png';
import { Container } from "./styles";
import Button from "../components/Button";

const App = () => {

  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    
  }

  return (
    <Container>
      <Image src={logo} className="logo"/>
      <Input />
      <Button type="button" name="Search Repos">Search Repos</Button>
      <ItemRepo/>
    </Container>
  );
}

export default App;
