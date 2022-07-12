import InputForm from "./components/InputForm";
import Text from "antd/lib/typography/Text";
import { Card, Timeline } from "antd";


const styles = {
    NFTs: {
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    gap: "10px",
    
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",

    left: 0,
    width: "100%",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "100px",
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-center",
    flexDirection: "column",

  },
};


function NFTCreate() {
  return (
    <>
       <div  style={styles.NFTs}>
    
       
    <Card
         style={styles.card}
          title={<h1 style={styles.title}>CREA NFT RINKEBY</h1>}
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text} style={{ fontSize: 20}}>
                Questo è un NFT lazy Minter che da la possibilità di registrate un immagine
                con nome e descrizione sulla blockchain di ethereum o di polygon, utile per utenze artistiche che
                vogliono mintare singoli pezzi di arte come NFT, puo tornare utile
              </Text>
            </Timeline.Item>
           
          </Timeline>
      <InputForm />
    </Card>
  </div>
        
   </>
    
  );
}

export default NFTCreate;
