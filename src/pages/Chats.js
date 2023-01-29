import React from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import heart from "./../styles/images/heart1.png"
import '../styles/style.css';

export const CHATS_LIST = [
	{
		id: '5c0a8c66-c2de-4175-8678-7fb57e4c1b26',
		name: 'Флудилка',
		href: 'http://t.me/youngprofessionals_chat',
		video: '/videos/unicorn.webp'
	},
	{
		id: '3838882b-9f7c-4b1b-a0c4-b3f1ce20f272',
		name: 'Карьера в стартапах',
		href: 'https://t.me/youngprofessionals_chat/2066',
		video: '/videos/notebook.webp'
	},
	{
		id: '60d26e76-4250-4533-9517-f316cd41ceb0',
		name: 'Библиотека знаний',
		href: 'https://t.me/youngprofessionals_chat/2068',
		video: '/videos/paper.webp'
	},
	{
		id: 'dac7ffb4-24d7-4e05-8ecd-ae734cac87c1',
		name: 'Трендвотчинг и будущее',
		href: 'https://t.me/youngprofessionals_chat/2069',
		video: '/videos/robot.webp'
	},
	{
		id: '86b9ccb2-becc-4319-91ba-3fd2955f407d',
		name: 'Карьера в компаниях',
		href: 'https://t.me/youngprofessionals_chat/2067',
		video: '/videos/money.webp'
	},
	{
		id: '9ffe6201-1dc4-4bbc-8a89-4a767904d2a0',
		name: 'MVP и поиск ресурсов',
		href: 'https://t.me/youngprofessionals_chat/2070',
		video: '/videos/eyes.webp'
	}
]

const Chat = () => {
	const chats = CHATS_LIST

	const renderChat = (chat) => {
		return (
			<a key={chat.id} style={{ textDecoration: "none" }} href={chat.href}>
				<div className="chat-item">
					<div className="chat-icon" style={{
						backgroundImage: `url("${chat.video}")`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}></div>
					<div className="chat-data" style={{
						display: "flex",
						alignItems: "center",
						paddingLeft: 12
					}}>
						<div className="chat-title">{chat.name}</div>
					</div>
					<div className="chat-details">

					</div>
				</div>
			</a>
		)
	}

	return (
		<div className="main-wrapper">
			<div className="header-title">Moove</div>
			<Header />
			<div className="content-wrapper">
				<img className="content-heart_img" src={heart} alt="" />
				<div className="section section2">
					<div className="section-title">Чаты</div>
				</div>
			</div>
			<div className="chats-wrapper">
				<div className="chats">
					{renderChat(chats[0])}
					<div className="chats-border"></div>
					{chats.slice(1).map(renderChat)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Chat