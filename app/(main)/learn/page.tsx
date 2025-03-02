import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";



const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            {/* <h1>Learn</h1>
            <p>Welcome to the learning page!</p> */}
            <StickyWrapper>
                <UserProgress
                    activeCourse={{title: "Exchange-traded funds", imageSrc: "/etf.jpg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Exchange-traded funds" />
                {/* <Header title="Stocks" />
                <Header title="Mutual funds" />
                <Header title="Bonds" /> */}
            </FeedWrapper>
            
        </div>
    );
};

export default LearnPage;