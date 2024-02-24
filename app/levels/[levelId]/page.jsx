"use client"
import Topics from "../../components/topics/Topics";

const LevelPage = ({params}) => {


  return (
    <div>
      <Topics level={params.levelId} />
    </div>
  );
};

export default LevelPage;