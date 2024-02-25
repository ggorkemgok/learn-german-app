"use client";
import React, { useState } from "react";
import styles from "./levels.module.css";
import Link from "next/link";

const Levels = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const levels = ["A1", "A2", "B1", "B2", "C1"];
  console.log(levels)
  return (
    <>
      {authenticated ? (
        <div className="text-center">
          <h2 className="text-2xl p-3">Wähle deinen Level</h2>
          <div className={styles.AllLevelContainer}>
            {levels.map((level, index) => {
              return (
                <div key={index} className={styles.levelContainer}>
                  <Link href={`/levels/${level.toLowerCase()}`}>
                    <h1>{level}</h1>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => setAuthenticated(true)}
          >
            Login with Google
          </button>
        </div>
      )}
    </>
  );
};

export default Levels;
