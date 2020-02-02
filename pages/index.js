import Head from "next/head";
import SWRegister from "../sw-register";
import "./style.css"

const sx = {
  container:{
    maxWidth: "900px",
    margin: "auto",
    boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
    minHeight: "100vh",
    backgroundColor: "#fff"
  },
  title:{
    textAlign: "right",
    fontSize: "25px",
    fontFamily: "serif"
  },
  header:{
    objectFit: "cover"
  },
  voiceGroup:{
    display: "flex",
    flexWrap: "wrap",
    margin: "6px 12px"
  },
  voice:{
    margin: "6px",
    flex: "1 1 auto",
    display: "inline-flex",
    cursor: "pointer",
    color: "white",
    borderRadius: "10px",
    padding: "12px 20px 12px 32px",
    backgroundColor: "#faa65f",
    borderLeft: "12px solid #FCDFA1",
    boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
  }
}

const voices = [
  "そのDVDうちにあるよ？",
  "だめだめだめだめ",
  "ネットは怖いんですよ〜？",
  "やっちゃった〜",
  "ゆるさないんだからね！",
  "死は救済です。",
  "他の女の匂いがする",
  "脳みそと直結してんのかぁ？",
  "来ちゃった♡"
]

function IndexPage() {
  return (
    <>
      <Head>
        <title>noavoice - presented by 望月のあ</title>
        <link rel="manifest" href="/static/manifest.json" />
      </Head>
      <main style={sx.container}>
      <img src="/static/header.png" alt="header" height="150px" width="100%" style={sx.header}/>
      
      <div style={sx.voiceGroup}>
      {voices.map((voice, i) => {
          return (
            <figure style={sx.voice} key={`voice-${i}`} onClick={e => {
              e.currentTarget.children[1].play()
            }}>
                <figcaption>
                  {voice}</figcaption>
                <audio
                    src={`/static/voices/${voice}.mp4`}>
                </audio>
            </figure>
          )
        })}
      </div>
      </main>

      
      <SWRegister />
    </>
  );
}

export default IndexPage;