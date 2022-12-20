import { useState } from "react";
import Image from "../components/Image"; 
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

import logo from '../assets/logo.png';
import { Container } from "./styles";
import Button from "../components/Button";
import {api} from '../services/api';

const App = () => {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearch = async () => {
    const {data} = await api.get(`/${currentRepo}`);
    if (data.id) {
      const exist = repos.find(repo => repo.id === data.id);
      if (!exist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    let removedRepo = repos.filter(currentRepo.id);
    return removedRepo;
  }


  return (
    <Container>
      <Image src={logo} className="logo" alt="Github Logo"/>
      <Input value={currentRepo} onChange={ (e) => setCurrentRepo(e.target.value)} />
      <Button type="button" name="Search" onClick={ handleSearch}/>
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}      
    </Container>
  );
}

export default App;
