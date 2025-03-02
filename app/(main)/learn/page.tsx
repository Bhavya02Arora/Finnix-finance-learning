import { redirect } from "next/navigation";
import { getUnits, getUserProgress } from "@/db/queries";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";
import { Unit } from "./unit";


const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const unitsData = getUnits();

    const [
        userProgress,
        units
      ] = await Promise.all([
        userProgressData,
        unitsData
      ]);
    
      if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
      }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            {/* <h1>Learn</h1>
            <p>Welcome to the learning page!</p> */}
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit // Cannot find name 'Unit'. Did you mean ...
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={undefined}
                            activeLessonPercentage={0}
                        />
                    </div>
                ))}
            </FeedWrapper>
            
        </div>
    );
};

export default LearnPage;