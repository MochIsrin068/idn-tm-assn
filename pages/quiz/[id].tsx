import { getAllquizIds, getquizData } from "../../lib/quiz";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layout";
import NavigationMenu from "../../components/layout/NavigationMenu";
import { Typography, Image } from "antd";
import Date from "../../components/content/Date";
import Meta from "../../components/content/Meta";

const { Title } = Typography;

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    time: string;
    contentHtml: string;
    thumbnail: string;
  };
}) {
  return (
    <>
      <Meta title={postData.title} />
      <Layout>
        <div className="mt-4 px-6">
          <NavigationMenu>
            <Title level={4} className="!m-0">
              Detail Quiz
            </Title>
          </NavigationMenu>

          <article className="mt-7">
            <h1 className={"font-bold text-lg"}>{postData.title}</h1>
            <div className={"text-gray-400"}>
              <Date dateString={postData.date} />
              {`, ${postData.time}`}
            </div>
            <Image
              src={postData.thumbnail}
              alt="thumbnail"
              preview={false}
              className="rounded-md mt-4"
            />
            <div
              className="mt-4 text-justify w-full"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list possible Value
  // atau sebagai matching routes files name
  const paths = getAllquizIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getquizData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
