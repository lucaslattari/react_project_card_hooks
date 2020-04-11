import React, {useState} from 'react';
import './Channel.css';

const Channel = props => {
  const [channelState, setChannelState] = useState({
        avatar: "avatarUD.png",
        name: "Universo Discreto",
        description: "Computação",
        channelId: 0
  });

  const changeChannel = (newName, newAvatar, newDescription) => {
    console.log(newName, newAvatar, newDescription);
    if(channelState.channelId === 0){
      setChannelState({
        avatar: "avatarMDM.jpg",
        name: "Manual do Mundo",
        description: "Tecnologia e Ciência",
        channelId: 1
      });
    }else if(channelState.channelId === 1){
      setChannelState({
        avatar: "avatarLOH.jpg",
        name: "Leitura Obrigahistória",
        description: "História",
        channelId: 2
      });
    }else if(channelState.channelId === 2){
        setChannelState({
          avatar: newAvatar,
          name: newName,
          description: newDescription,
          channelId: 3
        });
    }else if(channelState.channelId === 3){
      setChannelState({
        avatar: "avatarUD.png",
        name: "Universo Discreto",
        description: "Computação",
        channelId: 0
      });
    }
  }

  const styleCard = {
    width: '100%',
  };

  return(
      <div className="card">
        <img src={channelState.avatar} alt={`Avatar do canal ${channelState.name}`} style={styleCard}/>
        <div className="container">
          <h4><b>{channelState.name}</b></h4>
          <p>{channelState.description}</p>
        </div>
        <button type="button" onClick={() => changeChannel(props.newName, props.newAvatar, props.newDescription)}>Mudar Canal</button>
      </div>
    );
}

export default Channel;
