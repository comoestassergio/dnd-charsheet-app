import CategoryWrapper from "./components/CategoryWrapper";
import Divider from "./components/Divider";
import StatBox from "./components/StatBox";
import ChallengeItem from "./components/challenges/ChallengeItem";
import ChallengesTable from "./components/challenges/ChallengesTable";
import Challenges from "./components/layout/Challanges";
import Inventory from "./components/layout/Inventory";
import PlayerBio from "./components/layout/PlayerBio";
import Skills from "./components/layout/Skills";
import Stats from "./components/layout/Stats";
import Vitals from "./components/layout/Vitals";
import Weapons from "./components/layout/Weapons";
import SkillGroup from "./components/skills/SkillGroup";
import SkillItem from "./components/skills/SkillItem";
import SkillsTable from "./components/skills/SkillsTable";


export default function Home() {

  return (
    <div className="p-5 flex flex-col gap-5">
      <PlayerBio
        name="Андрэ"
        playerclass="Паладин"
        level="4"
        xp='3700'
        origin="Благородное"
        race="Полуэльф"
        worldview="Доброе" 
      />
      <Vitals />
      <Divider />
      <div className="grid grid-cols-[1fr_6fr] gap-3">
        <Stats />
        <div className="flex flex-col gap-5">
          <Challenges />
          <Skills />
          <Weapons />
          <Inventory />
        </div>
      </div>
    </div>
  )
}
