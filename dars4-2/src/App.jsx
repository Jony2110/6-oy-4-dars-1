// import Header from "../Header/header";
import styles from "./index.module.css";

function App() {
  // const [fotoPush, setFotoPush] = useState("https://picsum.photos/200/300");

  function handlePush() {
    // const fotoPush = setFotoPush(prompt("Rasm linkini kiriting"));
  }
  // const [linklar, setLinklar] = useState("");
  function linklarr() {
    // const linklar = setLinklar(prompt("LInkni kiriting"));
  }
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.container}>
        <h1 className={styles.h1}>Kompaniya ma`lumotlari</h1>
        <p className={styles.p}>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <div className={styles.img}>
          {/* <img src={fotoPush} alt="Iltimos link yuboring" /> */}
          <button className={styles.btn} onClick={handlePush}>
            Yuklash
          </button>
        </div>
      </div>
      <form>
        <div className={styles.box}>
          <label htmlFor="">
            Kompaniya nomi <span className={styles.zvezda}>*</span>
          </label>
          <input
            // onChange={handlName}
            type="text"
            placeholder="Kompaniya nomi"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="">
            Email <span className={styles.zvezda}>*</span>
          </label>
          <input
            // onChange={handlName}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="">
            Telefon raqam <span className={styles.zvezda}>*</span>
          </label>
          <input
            // onChange={}
            type="number"
            placeholder="Uz +998"
          />
        </div>
        <div className="mmmmm">
          <label htmlFor="">
            Linklar <span className="zvezda">*</span>
          </label>
        </div>
        <div className={styles.flex}>
          <button onClick={linklarr} className={styles.btn}>
            <img
              className={styles.img}
              // src="../../../public/img/Google.svg"
              alt=""
            />
          </button>
          <button onClick={linklarr} className={styles.btn}>
            <img
              className={styles.img}
              // src="../../../public/img/Insta.svg"
              alt=""
            />
          </button>
          <button onClick={linklarr} className={styles.btn}>
            <img
              className={styles.img}
              // src="../../../public/img/telegram.svg"
              alt=""
            />
          </button>
          <button onClick={linklarr} className={styles.btn}>
            <img
              className={styles.img}
              // src="../../../public/img/facebook.svg"
              alt=""
            />
          </button>
          <button onClick={linklarr} className={styles.btn}>
            <img
              className={styles.img}
              // src="../../../public/img/git.svg"
              alt=""
            />
          </button>
        </div>
        <div className="InputMiniiii">
          <div className={styles.box}>
            <label htmlFor="">
              Davlat <span className={styles.zvezda}>*</span>
            </label>
            <input type="text" placeholder="Davlat" />
          </div>
          <div className={styles.box}>
            <label htmlFor="">
              Shahar <span className={styles.zvezda}>*</span>
            </label>
            <input type="text" placeholder="Shahar" />
          </div>
        </div>
        <div className={styles.box}>
          <label htmlFor="">
            Yashash joyi <span className={styles.zvezda}>*</span>
          </label>
          <input
            // onChange={}
            type="number"
            placeholder="Yashash joyi"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="">
            Izoh <span className={styles.zvezda}>*</span>
          </label>
          <input type="text" placeholder="Kompaniya haqida izoh qoldiring" />
        </div>
        <div className="boxFlexxxx">
          <div className={styles.flexx}>
            <button className={styles.button}>ORTGA</button>
          </div>
          <div className={styles.flexx}>
            <button className={styles.button}>KEYINGISI</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
