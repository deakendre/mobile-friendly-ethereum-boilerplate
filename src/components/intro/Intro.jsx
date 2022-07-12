import React from 'react';
import { FaAward } from 'react-icons/fa';
import { MdMargin } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';

import './intro.css';
import { Card } from "web3uikit";
import { Illustration } from "web3uikit";
import Text from 'antd/lib/typography/Text';
import { Timeline } from 'antd';
import ME from "/home/endre/Desktop/BackupWEB3DevsIta/provastrana/ethereum-nft-marketplace-boilerplate/src/components/intro/ME.png"

const styles = {
  Image: {
          boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
          border: "2px solid #ffc",
          borderRadius: "0.5rem",
          display: "flex",
          margin: "0 auto",
          gap: "10px",
          width: "60%",
          minWidth: 360
  },
  Card: {
          boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
          border: "4px solid #e7eaf3",
          borderRadius: "0.5rem",
          display: "flex",
          margin: "0 auto",
          gap: "10px",
  },
    Title: {
            position: "relative",
            fontSize: 30,
            fontFamily: "helvetica",
            color: "white",
            textAlign: "center",
            gap: "10px",
            padding: 20,
            height: "fit-content"
  },
  Boxes: {
          margin: "0 auto",
          gap: "10px",
          width: "fit-content",
          height: "fit-content",
          flexDirection: "row", 
          position: "relative",
          left: 340,
          top: -130,
  },
  Card2: {
          display: "flex",
          margin: "0 auto",
          gap: "10px",
          width: "fit-content",
          height: "fit-content",
          flexDirection: "column", 
          position: "relative",
    padding: 5,
    paddingTop: "30px",
    opacity: "100%",
    color: "#C5C5C5",
          
  },
  Illustration: {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "normal",
    alignContent: "normal",
    padding: "50px",
      WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
  },
  Features: {
      display: "block",
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
  alignSelf: "auto",
    order: 0,
    padding: "10px",
    width: "200px",
    margin: 10
  }
};


//FINE STYLES

const Intro = () => {
  return (
    <section id="about">

        <p //Titolo
          style={styles.Title}>
         YOU ARE WELCOME CRYPTO-PIONEER!
        </p>
    
    
         <img src={ME} alt="me"  style={styles.Image} />
  
      <div //Icone e testo
        style={styles.Boxes}>
        
          <div className="about__cards"
            style={{
              position: "relative",
              top: 150,
              right: 350
          }}>
          <article className="about__card"
            style={{ color: "white" }}>
              <FaAward className="about__icon" style={{color:"white"}} />
              <h5 style={{color:"white"}}>Experience</h5>
              <small style={{color:"white"}}>3 year</small>
            </article>
            <article className="about__card" style={{color:"white"}}>
              <VscFolderLibrary className="about__icon" style={{color:"white"}} />
              <h5 style={{color:"white"}}>Projects</h5>
              <small style={{color:"white"}}>20+ Completed Projects</small>
            </article>
        </div>
        </div>
        <div
          style={styles.Card2}>
        <Card //Card descrizione
          
          style={styles.card}
        
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text} style={{fontSize:"20px"}}>
          <h1 style={styles.title}>CHI SIAMO</h1>
          and i'm a Web3 Developer and a metaverse entusiast.<br></br>
          I can offer a lot of servicies including all kind of websites <br></br>
          that includes blockchain technologies, examples of the servicies i can offer are:<br></br>
          - Custom smart contracts for cryptocurrencies and NFTs (ERC20/ERC721/ERC1155)<br></br>
          - NFT Minting Dapp<br></br>
          - NFT Marketplaces (including Buy Sell and Lazy minting)<br></br>
          - NFT Trait sniper<br></br>
          - Decentralized Exchanges like Uniswap<br></br>
          - 3D Ultra high definition Avatars with integrated facial rigging for real-time usage<br></br>
          (like twitch or youtube live).
            </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        </div>
      <div className="container about__container"
        style={{ textAlign: "center", bottom: 0, display: "flex", flexDirection: "row"  }}>
        <div //Illustrazioni
          style={styles.Illustration}>
            <Card style={styles.Features}
              onClick={function noRefCheck(){}}
              setIsSelected={function noRefCheck(){}}
              title="Bundle"
            tooltipText="Coming soon"
           description="Get all you need for start your own project">
              <div>
                <Illustration 
                  height="180px"
                  logo="bundle"
                  width="100%"
              />
          </div>
            </Card>
            <Card style={styles.Features}
              onClick={function noRefCheck(){}}
              setIsSelected={function noRefCheck(){}}
              title="Lazy NFT"
            tooltipText="Coming soon"
            description="Create your own NFTs and list them on Opensea"
  >
          <div>
      <Illustration
        height="180px"
        logo="lazyNft"
                width="200px"
      />
    </div>
  </Card>
  <Card style={styles.Features}
    description="Create your own NFT Marketplace"
    isSelected
    onClick={function noRefCheck(){}}
    setIsSelected={function noRefCheck(){}}
    title="NFT Marketplace"
    tooltipText="Create and earn money from your own NFT Marketplace"
  >
    <div>
      <Illustration
        height="180px"
        logo="marketplace"
        width="100%"
      />
    </div>
          </Card>
  <Card style={styles.Features}
    description="Create your own cryptocurrency / token"
    onClick={function noRefCheck(){}}
    setIsSelected={function noRefCheck(){}}
    title="ERC20-Token"
    tooltipText="Create your own ERC20 Token"
  >
    <div>
      <Illustration
        height="180px"
        logo="token"
        width="100%"
      />
    </div>
            </Card>
            <Card style={styles.Features}
    description="Create and publish your own NFT Collection"
    onClick={function noRefCheck(){}}
    setIsSelected={function noRefCheck(){}}
    title="NFT Collection"
    tooltipText="Create your very own NFT Collection"
  >
    <div>
      <Illustration
        height="180px"
        logo="chest"
        width="100%"
      />
    </div>
            </Card>
            <Card style={styles.Features}
    description="Click to create your Decentralized Application"
    onClick={function noRefCheck(){}}
    setIsSelected={function noRefCheck(){}}
    title="Dapp"
    tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid"
  >
    <div>
      <Illustration
        height="180px"
        logo="servers"
        width="100%"
      />
    </div>
            </Card>
            <Card style={styles.Features}
    onClick={function noRefCheck(){}}
    setIsSelected={function noRefCheck(){}}
    title="NFT Collection"
            tooltipText="Coming soon"
             description="Create your own +10k NFT collection"
  >
    <div>
      <Illustration
        height="180px"
        logo="pack"
       
      />
    </div>
          </Card>
          <Card style={styles.Features}
    description="Create your own NFT Marketplace"
  
    onClick={function noRefCheck(){}}
    setIsSelected={function noRefCheck(){}}
    title="Smart contracts"
            tooltipText="Create and earn money from your own NFT Marketplace"
             description="You can ask us for custom Smart Contracts"
  >
    <div>
      <Illustration
        height="180px"
                logo="comingSoon"
        width="100%"
      />
    </div>
          </Card>
</div>
      
      
      </div>
    </section>
    
  )
}

export default Intro