import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #ebebeb",
    borderRadius: "0.5rem",
     display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    gap: "10px",
    minWidth: 360,
    left: 5,
   height: "1000px"
  },
  timeline: {
    marginBottom: "-20px",
  },
  textdivs: {
    position: "relative",
    top: -25
  }
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div style={{ display: "flex", gap: "10px", height: "fit-content", }}>
      <Card style={styles.card} title={<h1 style={styles.title}>ROADMAP</h1>}>
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="1">
            <Text delete style={styles.text}>
              <div style={styles.textdivs}>
           Realizzazione di un prototipo di sito web 3.0 Mobile Responsive 
           </div>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="2">
            <Text delete style={styles.text}>
                <div style={styles.textdivs}>
              Aggiungere NFT Marketplace e farlo funzionare <br />
                dalla ethereum-nft-marketplace-boilerplate
                </div>
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="3">
            <Text delete style={styles.text}>
              <div style={styles.textdivs}>
              Aggiungere NFT Lazy Minter
              </div>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="4">
            <Text delete style={styles.text}>
              <div style={styles.textdivs}>
            Sosituire il generatore di Rarità con una versione che rispetti<br />
            Api call-limit di moralis tramite python
              </div>
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="5">
            <Text delete style={styles.text}>
              <div style={styles.textdivs}>
                Pubblicare la repository open-source Mobile<br /><span></span> Responsive su Github
                </div>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="6">
            <Text style={styles.text}>
               <div style={styles.textdivs}>
                Aggiungere NFT-Minter in stile hashlips<br />
                </div>
                    </Text>
          </Timeline.Item>

          <Timeline.Item dot="7">
           
              <Text style={styles.text}>
                  <div style={styles.textdivs}>
                Aggiungere NFT Whale watcher
              </div>
              </Text>
          </Timeline.Item>
          <Timeline.Item dot="8">
            
              <Text style={styles.text}>
                 <div style={styles.textdivs}>
                Aggiornare la ethereum-boilerplate alla versione V2 (typescript)
            </div>
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="9">
          
              <Text style={styles.text}>
                 <div style={styles.textdivs}>
              Continuare ad Aggiornarsi riguardo le ultime feature che vengono aggiunte
              </div>
              </Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
       
       
      </div>
    </div>
  );
}
