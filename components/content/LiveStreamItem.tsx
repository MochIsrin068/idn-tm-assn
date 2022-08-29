import React from "react";
import { Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

type TPropsLiveStreamItem = {
  data: {
    title: string;
    date: string;
    time: string;
    category: string;
    thumbnail: string;
    status: string;
    views: string;
  };
};

export default function LiveStreamItem({ data }: TPropsLiveStreamItem) {
  const isScheduler = data.status.toLowerCase() === "terjadwal";
  const isLive = data.status.toLowerCase() === "live";

  return (
    <div
      className="rounded-lg flex flex-col justify-between h-[25vh] hover:opacity-90"
      style={{
        background: `url("${data.thumbnail}")`,
        backgroundSize: "cover",
      }}
      data-testid="live-stream-container"
    >
      {isLive ? (
        <div className="mx-3 my-3 p-1 flex items-center bg-[#00000047] w-36 justify-center rounded-lg">
          <EyeOutlined className="text-white text-sm" />
          <Text className="text-white text-sm">{`${data.views} |`}</Text>

          <div className="bg-red-500 h-2 w-2 mx-1 rounded-lg" />
          <Text className="text-red-500 text-sm">{data.category}</Text>
        </div>
      ) : (
        <div
          className={`m-4 px-2 py-1 ${
            isScheduler ? "bg-red-200" : "bg-gray-400"
          } ${
            isScheduler ? "text-red-500" : "text-white"
          }  w-[78px] rounded-lg text-sm flex items-center justify-center`}
        >
          {data.status}
        </div>
      )}

      <div className="p-4 bg-[#0000000d]">
        <Title level={5} className="!m-0 !text-white line-clamp-2">
          {data.title}
        </Title>
        <Text className="text-white">{data.category}</Text>
      </div>
    </div>
  );
}
