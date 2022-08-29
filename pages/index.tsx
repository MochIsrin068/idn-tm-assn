import type { GetStaticProps } from "next";
import Layout from "../components/layout";

import useDetailProfile from "../hooks/useDetailProfile";
import { TABS } from "../constant";
import TabItem from "../components/content/TabItem";
import { getSortedNewsData } from "../lib/news";
import { getSortedliveStreamData } from "../lib/liveStream";
import { getSortedquizData } from "../lib/quiz";
import Link from "next/link";
import Header from "../components/layout/Header";
import NewsItem from "../components/content/NewsItem";
import LiveStreamItem from "../components/content/LiveStreamItem";
import QuizItem from "../components/content/QuizItem";
import Meta from "../components/content/Meta";

type TPropsHomePage = {
  allNewsData: any[];
  allLiveStreamData: any[];
  allQuizsData: any[];
};

function Home({
  allNewsData,
  allLiveStreamData,
  allQuizsData,
}: TPropsHomePage) {
  const { activeTab, onChangeTab, detailData } = useDetailProfile();

  return (
    <>
      <Meta title="IDN - Media" />
      <Layout>
        <Header detailData={detailData} />
        <div className="flex items-center justify-between mt-4 px-6">
          {TABS.map((tab: { value: string; label: string }) => (
            <TabItem
              key={tab.value}
              label={tab.label}
              onChangeTab={() => onChangeTab(tab.value)}
              isActive={activeTab === tab.value}
            />
          ))}
        </div>
        <div className="px-5 h-[50vh] overflow-y-scroll mt-5 pb-5">
          {activeTab === "news" && (
            <div>
              {allNewsData.map((data: any) => (
                <Link href={`/news/${data?.id}`} key={data?.id}>
                  <a>
                    <NewsItem data={data} />
                  </a>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "livestream" && (
            <div className="grid grid-cols-2 gap-4">
              {allLiveStreamData.map((data: any) => (
                <Link href={`/liveStream/${data?.id}`} key={data?.id}>
                  <a>
                    <LiveStreamItem data={data} />
                  </a>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "quiz" && (
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {allQuizsData.map((data: any) => (
                <Link href={`/quiz/${data?.id}`} key={data?.id}>
                  <a>
                    <QuizItem data={data} />
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

// Statc Generation Data Fething
export const getStaticProps: GetStaticProps = async () => {
  const allNewsData = getSortedNewsData();
  const allLiveStreamData = getSortedliveStreamData();
  const allQuizsData = getSortedquizData();

  return {
    props: {
      allNewsData,
      allLiveStreamData,
      allQuizsData,
    },
  };
};

export default Home;
