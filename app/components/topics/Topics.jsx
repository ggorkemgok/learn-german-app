import { topics } from "../../topicsData/topicsData";
import styles from "./topics.module.css";
import Link from "next/link";

const Topics = ({ level }) => {
  const topicObject = topics.find((topic) => topic.level === level);
  return (
    <div>
      <div className={styles.title}>
        <h1>Welcome to level {(level.toUpperCase())}</h1>
      </div>

      {topicObject && (
        <div className={styles.container}>
          {topicObject.topicList.map((topic, index) => (
            <Link
              key={index}
              href={`/levels/${level}/${encodeURIComponent(topic)}`}
            >
              <button className={styles.button}>
                {topic}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topics;
