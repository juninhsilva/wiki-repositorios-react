import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
    
    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer onClick={handleRemove}>
            <h3># - { repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} className="see-it" target="_blank" rel="noreferer">See it</a><br/>
            <a href="/#" className="remover">Remove</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;