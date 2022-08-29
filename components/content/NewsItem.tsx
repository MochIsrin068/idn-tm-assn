import React from "react";
import MainText from "./MainText";
import Date from "./Date";
import { Typography, Image } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const { Text } = Typography;

type TPropsNewsItem = {
  data: {
    title: string;
    date: string;
    time: string;
    category: string;
    thumbnail: string;
  };
};

export default function NewsItem({ data }: TPropsNewsItem) {
  return (
    <div className="mb-6 hover:opacity-90">
      <div className="flex justify-between">
        <div className="w-2/3">
          <MainText
            isFix
            secondaryText={
              <div className="flex items-center text-sm">
                <Date dateString={data.date} />
                {`, ${data.time}`}
              </div>
            }
            primaryText={data.title}
          />
        </div>
        <div
          className="w-[160px] h-[96px] rounded-md flex items-end justify-end bg-no-repeat"
          style={{
            background: `url("${data.thumbnail}")`,
            backgroundSize: "cover",
          }}
          data-testid="news-thumbnail-container"
        >
          <div className="bg-white py-1 px-2 rounded-tl-md">
            <Image
              src={"/images/idn-logo.png"}
              alt="thumbnail"
              width={60}
              preview={false}
              data-testid="news-thumbnail"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        <Text className="text-gray-400">{data.category}</Text>
        <ShareAltOutlined className="cursor-pointer text-xl font-bold" />
      </div>
    </div>
  );
}
