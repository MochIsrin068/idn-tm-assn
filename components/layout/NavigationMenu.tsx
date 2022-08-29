import React from "react";
import { message } from "antd";
import { ArrowLeftOutlined, ShareAltOutlined } from "@ant-design/icons";
import Link from "next/link";

type TPropsNavigationMenu = {
  children?: JSX.Element;
};

export default function NavigationMenu({ children }: TPropsNavigationMenu) {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <ArrowLeftOutlined className="cursor-pointer text-xl font-bold" />
      </Link>
      {children}
      <ShareAltOutlined
        className="cursor-pointer text-xl font-bold"
        onClick={() => message.success("Share this content!")}
      />
    </div>
  );
}
