import React, {useEffect, useState} from 'react'
import './../styles/style.css';
import heart from "./../styles/images/heart1.png"
import { Link } from 'react-router-dom';
import Footer from './CommonComponents/Footer';
import heartArticle from "./../styles/images/heartArticle.svg"
import commentArticle from "./../styles/images/commentArticle.svg"
const Article = () => {
    const [active,setActive] = useState("popular")
    const [posts,setPosts] = useState(null)
    useEffect(()=>{
        fetch(`https://11f4-188-170-79-164.eu.ngrok.io/api/v1/posts/all_types_posts`, {
            method: "GET",
            headers: {
              "TOKEN":window.Telegram.WebApp.initDataUnsafe.user.id,
              "ngrok-skip-browser-warning": "69420",
            },
          })
            .then((res) => {
    return res.json();       
            })
            .then((data) => {
                setPosts(data);
            });
    },[])
    useEffect(()=>{
        console.log(posts)
    },[posts])
  return (
    <div class="main-wrapper">
    <div class="header-title">Moove</div>
    <div class="marquee" data-duplicated='true' data-direction='left'>By skolkovo &emsp; By skolkovo &emsp; By skolkovo &emsp; By skolkovo &emsp; By skolkovo</div>
<div class="content-wrapper">  
  <div class="section section1">
    	<img class="content-heart_img" src={heart}/>
    <div class="section-title" style={{textAlign:"left"}}>Есть что почитать</div>
    <div class="section-cols">
      <div class="col-3">
        <div class="post-author">@anovikov</div>
        <div class="post-title">Как зумеры изменили всё за год</div>
        <div class="post-likes">❤<span class="post-likes-num">24</span></div>
      </div>
      <div class="col-3">
        <div class="post-author">@anovikov</div>
        <div class="post-title">Кто такой зумер и с чем его едят</div>
        <div class="post-likes">❤<span class="post-likes-num">1.2K</span></div>
      </div>
      <div class="col-3">
        <div class="post-author">@anovikov</div>
        <div class="post-title">Как зумеры изменили всё за год</div>
        <div class="post-likes">❤<span class="post-likes-num">24</span></div>
      </div>
    </div>
  </div>
  <div style={{height:42,borderRadius:10,display:"flex",justifyContent: "center", alignItems: "center"}} class="grad-rect rect5">
    <div class="rect2-title" style={{padding:0,textDecorationLine:"none"}}>Лидерборд</div>
  </div>
  <div class="chats-wrapper">
  <div class="chats">
    		<div class="chat-item">
    		<div class="chat-title"onClick={()=>setActive("popular")} style={{paddingRight:20, fontSize:14, color:"#FFF", fontWeight:600,opacity:active === "popular" ? 1 :0.5}}>ПОПУЛЯРНОЕ</div>
    		<div class="chat-title"onClick={()=>setActive("recent")}style={{paddingRight:20, fontSize:14, color:"#FFF", fontWeight:600,opacity:active === "recent" ? 1 :0.5}}>СВЕЖЕЕ</div>
    		<div class="chat-title"onClick={()=>setActive("my_feed")} style={{paddingRight:20, fontSize:14, color:"#FFF", fontWeight:600,opacity:active === "my_feed" ? 1 :0.5}}>МОЯ ЛЕНТА</div>
    		</div>
    		<div class="chats-border"></div>
            {posts !== null && posts[active]?.map((i)=>{
                return(
                    <a href={i.telegraph_url} style={{textDecoration:"none"}}>
<div class="chat-item">
    			<div class="chat-data" style={{display:"flex",marginLeft:0,flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
    				<div class="chat-title">{i.title}</div>
    				<div class="chat-last-user" style={{display: 'flex',alignItems: 'center',marginTop:5}}><img src={heartArticle}/><span style={{paddingLeft:5}}>{i.likes_amount}</span> <img src={commentArticle} style={{marginLeft:25}}/> <span style={{paddingLeft:5}}>{i.views_amount}</span></div>
    			</div>
    		</div>
            </a>
                )
            })}
    		
    	
    	</div>
</div>
</div>
<Footer/>
</div>
  )
}

export default Article