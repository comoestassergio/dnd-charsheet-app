import CategoryWrapper from "./components/CategoryWrapper";
import Divider from "./components/Divider";
import StatBox from "./components/StatBox";
import ChallengeItem from "./components/challenges/ChallengeItem";
import ChallengesTable from "./components/challenges/ChallengesTable";
import Challenges from "./components/layout/Challanges";
import Skills from "./components/layout/Skills";
import Stats from "./components/layout/Stats";
import Vitals from "./components/layout/Vitals";
import SkillGroup from "./components/skills/SkillGroup";
import SkillItem from "./components/skills/SkillItem";
import SkillsTable from "./components/skills/SkillsTable";


export default function Home() {

  return (
    <div className="p-5 flex flex-col gap-5">
      <Vitals />
      <Divider />
      <div className="grid grid-cols-[1fr_6fr] gap-3">
        <Stats />
        <div className="flex flex-col gap-5">
          <Challenges />
          <Skills />
        </div>
      </div>
    </div>
  )
}
