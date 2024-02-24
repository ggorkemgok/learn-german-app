import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>SprachMeister</h1>
      </div>
      <div className={styles.container}>
        <h1>Mühelos Deutsch Lernen!</h1>
      </div>
      <div className={styles.description}>
        <h2>
          "SprachMeister" ist die beste Web-App, um Deutsch zu lernen. Mit
          interaktiven Lektionen und Spielen passt sie sich deinem Niveau an.
          Tauche ein in die deutsche Sprache!
        </h2>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/levels"><button>Fang an zu lernen</button></Link> 
      </div>
      <div className={styles.detail}>
        <h3>Üben von A1 bis C1</h3>
        <p>
          Mit benutzerfreundlichem Design und Zugang von überall aus ist
          SprachMeister die ideale Wahl, um in die faszinierende Welt der
          deutschen Sprache einzutauchen. Registriere dich noch heute und
          beginne deine Reise zum Deutsch-Meister!"
        </p>
      </div>
    </div>
  );
}
