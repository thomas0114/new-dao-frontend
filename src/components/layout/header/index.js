import React, { useEffect, useState } from "react";
import { Box, Modal, Backdrop } from '@material-ui/core'
import "../../styles_global.scss";
import styled from 'styled-components'
import "./styles.scss";
import WalletModel from "../../wallet_modal";

export default function Header() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { web3Loading, getweb3 } = WalletModel()
	const [modalShow, setModalShow] = useState("none")

	const style1 = {
		display: "flex",
		flexDirection: 'column',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '60%',
		height: 468,
		boxShadow: 30,
		backgroundColor: '#2DAFB2',

	};

	async function connectWallet() {
		await getweb3().then((response) => {
			response.eth.getAccounts().then((result) => {
				response.eth.getBalance(result[0]).then((result) => {
					// console.log('balance:', parseFloat(result).toFixed(1))
					handleOpen();
				})
			})
		})
	}
	useEffect(() => {
		// document.getElementById("modal").style.display = modalShow
		// document.getElementById("main-container").style.opacity = modalShow === "block" ? 0.2 : 1
		// document.getElementById("header-title").style.opacity = modalShow === "block" ? 0.2 : 1
	})

	return (
		<div className="header-wrapper" id="header-wrapper">
			<div id="header-title">
				<div className="header-text">FAITH CONNEXION&nbsp;</div>
				<div className="header-text text-gradient">TRIBE</div>
			</div>
			<div className="connect-button-wrapper">
				{web3Loading ? <button className="button-blue-border" disabled>Loading...</button> : <button className="button-blue-border" onClick={connectWallet}>RESERVE NOW</button>}
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				BackdropProps={{
					classes: {
						root: {
							background: 'rgba(0,255,0,0.9)'
						}
					}
				}}
			>
				<Box sx={style1}>
					<Box sx={{
						height: '68px',
						display: 'flex',
						alignItems: 'flex-start',
						lineHeight: 'initial',
					}}>
						<Box fontSize='28px' fontWeight='bold' color='white'>Select a Wallet</Box>
					</Box>
					{/* <Box display='flex' flexDirection='column' height="100%" width='100%'>
                        <Box display='flex' alignItems="center" height="100%" flex='1' >
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['MetaMask']) }}>
                                <img src={metamask} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>MetaMask</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['WalletConnect']) }}>
                                <img src={walletconnect} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>WalletConnect</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['BinanceWallet']) }}>
                                <img src={binance} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>BinanceWallet</Connect_btn_letter>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['TrustWallet']) }}>
                                <img src={trust} width="40px" height="40px"></img><Connect_btn_letter fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>TrustWallet</Connect_btn_letter>
                            </Box>
                        </Box>
                    </Box> */}
				</Box>
			</Modal>
			{/* <div className="wallet-result-modal" id="modal">
				<h1>RESERVE FAITH TOKEN</h1>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-ETH.svg" alt="ETH Icon" /><span>ETH</span></div>
						<div className="balance-value">0.0</div>
					</div>
					<div className="balance-card-row">
						<div><span className="balance-max">Balance: 21.33ETH</span><span>(MAX)</span></div>
					</div>
					<img src="/icon-exchange.svg" alt="Exchange Icon" className="icon-exchange" />
				</div>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-FAITH.svg" alt="FAITH TOKEN Icon" /><span>FAITH TOKEN</span></div>
					</div>
				</div>
				<div className="button-wrapper">
					<button className="white-simple-button">RESERVE</button>
				</div>
				<div className="price-list">
					<span>Price tolarance</span><span>1%</span>
				</div>
				<div className="price-list">
					<span>Gas Price</span><span>1 GWI</span>
				</div>
				<div className="price-list">
					<span>Token Price</span><span>1ETH = 10FAITH</span>
				</div>
				<button className="button-close" onClick={() => setModalShow("none")}><img src="/btn-close.svg" alt="close button" /></button>
			</div> */}
		</div>
	);
}
