import React, {useState, useEffect} from 'react'
import './../styles/style.css';
import arrow from "./../styles/images/arrow.svg"
import { Link } from 'react-router-dom';
import Footer from './CommonComponents/Footer';
import heartArticle from "./../styles/images/heartArticle.svg"
import commentArticle from "./../styles/images/commentArticle.svg"
import imagePick from "./../styles/images/imagePick.svg"
import play from "./../styles/images/play.svg"
import share from "./../styles/images/share.svg"
const ArticleCreate = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
   const  handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
      }
      const fetchData = async () => {
        const respons = await fetch(`https://0f89-2a00-f940-2-4-2-00-2a50.eu.ngrok.io/api/v1/posts/create_post?title=${title}&content=${content}`, {
          method: "POST",
          mode: "cors",
          headers: {
            "TOKEN": window.Telegram.WebApp.initDataUnsafe.user.id,
            "ngrok-skip-browser-warning": "69420",
          },
          body: JSON.stringify({

          }),
        });
        const res = await respons.json();
        console.log(res)
      };
  return (
    <div class="main-wrapper">
<div class="content-wrapper">  
  <div class="section section1">
    <div class="section-title" style={{textAlign:"left",display:"flex",align:"center", paddingTop:25}}><Link to="/article" ><img src={arrow} style={{marginLeft:12,marginRight:18}}/></Link>Новая запись</div>
   
  </div>

 <div style={{ textAlign:"left", margin:"23px 0 24px 0"}}>
    <span style={{fontSize:15, fontWeight:300, color:"#FFF",opacity:0.5}}>Автор статьи</span>
 </div>
 <div style={{ textAlign:"left", margin:"23px 0 24px 0",display:'flex',flexDirection:"column"}}>
    <span style={{fontSize:16, fontWeight:600, color:"#FFF",paddingBottom:20}}>Заголовок статьи</span>
    <textarea value={title} onChange={(e)=>setTitle(e.target.value)} onKeyDown={handleKeyDown} name="element" className='inputText' style={{backgroundColor:"transparent",border:0,minHeight:50,color:"white",wordBreak:"break-word",resize:"none",}} placeholder="Текст заголовка..."/>
 </div>
 <div style={{ textAlign:"left", margin:"23px 0 24px 0",display:'flex',flexDirection:"column"}}>
    <span style={{fontSize:14, fontWeight:500, color:"#FFF",paddingBottom:20, opacity:0.9}}>Подзаголовок статьи</span>
    <textarea value={content} onChange={(e)=>setContent(e.target.value)} onKeyDown={handleKeyDown} name="element" className='inputText' style={{backgroundColor:"transparent",border:0,minHeight:50,color:"white",wordBreak:"break-word",resize:"none",}} placeholder="Текст заголовка..."/>
 </div>
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
    <div style={{display:"flex"}}>
    <div style={{borderRadius:"50%",backgroundColor:"#616161",width:28,height:28,display:"flex",justifyContent:"center",alignItems:"center"}}><img src={imagePick}/></div>
    <div style={{borderRadius:"50%",backgroundColor:"#616161",width:28,height:28,display:"flex",justifyContent:"center",alignItems:"center",margin:"0 16px 0 16px"}}><img src={play}/></div>
    <div style={{borderRadius:"50%",backgroundColor:"#616161",width:28,height:28,display:"flex",justifyContent:"center",alignItems:"center"}}><img src={share}/></div>
    </div>
    <button className={title !== "" && content !== "" && "rect6"} onClick={()=>fetchData()} style={{backgroundColor:"#616161",borderRadius:10, height:36,border:"none", color:(title === "" || content === "") && "#D9D9D9",fontSize:16, width:"35%",fontWeight:600}}>Отправить</button>
 </div>
</div>
</div>
  )
}

export default ArticleCreate