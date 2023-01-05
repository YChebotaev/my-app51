import React from 'react'
import './../styles/style.css';
import heart from "./../styles/images/heart1.png"
import { Link } from 'react-router-dom';
const Chat = () => {
  return (
<div class="main-wrapper">
		<div class="header-title">Moove</div>
		<div class="marquee" data-duplicated='true' data-direction='left'>By skolkovo &emsp; By skolkovo &emsp; By skolkovo &emsp; By skolkovo &emsp; By skolkovo</div>
    <div class="content-wrapper">  
    	<img class="content-heart_img" src={heart}/>
      <div class="section section2">
        <div class="section-title">Чаты</div>
      </div>
    </div>
    <div class="chats-wrapper">
    	<div class="chats">
    		<a style={{textDecoration:"none"}} href="https://t.me/youngprofessionals_chat/2070"><div class="chat-item">
    			<div class="chat-icon"></div>
    			<div class="chat-data" style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
    				<div class="chat-title"> MVP и поиск ресурсов</div>
    			</div>
    			<div class="chat-details">
    
    			</div>
    		</div></a>
    		<div class="chats-border"></div>
    		<a style={{textDecoration:"none"}} href="https://t.me/youngprofessionals_chat/2069"><div class="chat-item">
    			<div class="chat-icon"></div>
    			<div class="chat-data" style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
    				<div class="chat-title"> Трендвотчинг и будущее</div>
    			</div>
    			<div class="chat-details">
    
    			</div>
    		</div></a>
            <a style={{textDecoration:"none"}} href="https://t.me/youngprofessionals_chat/2068"><div class="chat-item">
    			<div class="chat-icon"></div>
    			<div class="chat-data" style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
    				<div class="chat-title">Библиотека знаний</div>
    			</div>
    			<div class="chat-details">
    
    			</div>
    		</div></a>
    		<a style={{textDecoration:"none"}} href="https://t.me/youngprofessionals_chat/2067"><div class="chat-item">
    			<div class="chat-icon"></div>
    			<div class="chat-data" style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
    				<div class="chat-title">Карьера в компаниях</div>
    			</div>
    			<div class="chat-details">
    
    			</div>
    		</div></a>
            <a style={{textDecoration:"none"}} href="https://t.me/youngprofessionals_chat/2066"><div class="chat-item">
    			<div class="chat-icon"></div>
    			<div class="chat-data" style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
    				<div class="chat-title">Карьера в стартапах</div>
    			</div>
    			<div class="chat-details">
    
    			</div>
    		</div></a>
    		
    	</div>
    </div>  
	</div>
  )
}

export default Chat