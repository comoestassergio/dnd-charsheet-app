'use client';

import CategoryWrapper from "../CategoryWrapper";
import ChallengeItem from "../challenges/ChallengeItem";
import ChallengesTable from "../challenges/ChallengesTable";

const Challenges = () => {
    return (
        <CategoryWrapper title="Испытания">
            <ChallengesTable>
                <ChallengeItem 
                    title="сил"
                    modifier="3"
                />
                <ChallengeItem 
                    title="лов"
                    modifier="0"
                />
                <ChallengeItem 
                    title="вын"
                    modifier="0"
                />
                <ChallengeItem 
                    title="инт"
                    modifier="1"
                />
                <ChallengeItem 
                    title="муд"
                    modifier="2"
                />
                <ChallengeItem 
                    title="хар"
                    modifier="3"
                />
            </ChallengesTable>
        </CategoryWrapper>
    )
};

export default Challenges;