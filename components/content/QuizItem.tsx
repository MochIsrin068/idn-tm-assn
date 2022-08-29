import React from "react";
import { Typography, Image } from "antd";
import MainText from "./MainText";

const { Text } = Typography;

type TPropsQuizItem = {
  data: {
    title: string;
    date: string;
    time: string;
    category: string;
    thumbnail: string;
    plays: string;
  };
};

export default function QuizItem({ data }: TPropsQuizItem) {
  return (
    <div className="rounded-lg hover:opacity-90">
      <Image
        src={data.thumbnail}
        alt="thumbnail"
        className="rounded-lg"
        preview={false}
      />

      <MainText isFix secondaryText={data.category} primaryText={data.title} />

      <div className="mt-2 flex items-center">
        <Text className="text-gray-400 font-bold mr-1">{data.plays}</Text>
        <Text className="text-gray-400">Plays</Text>
      </div>
    </div>
  );
}
