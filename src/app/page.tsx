import Image from "next/image";
import styles from "./page.module.css";
import { getAllCharacters } from "../../lib/characters";

export default async function Home() {
  const data = await getAllCharacters();

  return (
    <main className={styles.main}>
      {data?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </main>
  );
}
