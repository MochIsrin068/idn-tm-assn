import React from "react";
import { Typography } from "antd";

const { Text, Title } = Typography;

type TPropsMainText = {
  primaryText: string;
  secondaryText: string | JSX.Element;
  isFix?: boolean;
};

export default function MainText({
  primaryText,
  secondaryText,
  isFix,
}: TPropsMainText) {
  return (
    <div className={`mr-4 ${isFix ? "" : "w-2/5"}`}>
      <Text className="text-gray-400">{secondaryText}</Text>
      <Title level={5} className="!m-0 line-clamp-3">
        {primaryText}
      </Title>
    </div>
  );
}
