import React from "react";
import { Avatar, Typography, Button, Skeleton, Tooltip, Result } from "antd";
import MainText from "../content/MainText";
import NavigationMenu from "./NavigationMenu";

const { Paragraph } = Typography;

type TPropsHeader = {
  detailData: {
    isLoading: boolean;
    isError: boolean;
    data: {
      image: string;
      fullname: string;
      followers: number;
      following: number;
      about: string;
    };
  };
};

export default function Header({ detailData }: TPropsHeader) {
  if (detailData.isError)
    return <Result status="warning" title="Failed to load data profile!!!." />;
  return (
    <div className="px-6 pt-6 pb-4 border-b-2 border-gray-100">
      {/* Menu Navigation */}
      <NavigationMenu />

      {/* Creator Bio */}
      <div className="flex items-center my-6">
        <div className="">
          {detailData.isLoading ? (
            <Skeleton.Avatar active={true} size={100} shape={"circle"} />
          ) : (
            <Avatar
              src={detailData.data.image}
              size={100}
              className="bg-gray-300"
            />
          )}
        </div>
        <div className="ml-4 w-full">
          {detailData.isLoading ? (
            <>
              <div className="w-full">
                <Skeleton active />
              </div>
            </>
          ) : (
            <MainText
              primaryText={detailData.data.fullname}
              secondaryText="Verified Creator"
              isFix
            />
          )}

          <div className="flex mt-2">
            {!detailData.isLoading && (
              <MainText
                primaryText={`${detailData.data.following}`}
                secondaryText="Following"
              />
            )}

            {!detailData.isLoading && (
              <MainText
                primaryText={`${detailData.data.followers}`}
                secondaryText="Followers"
              />
            )}
          </div>
        </div>
      </div>

      {detailData.isLoading ? (
        <div className="w-full mb-3">
          <Skeleton active paragraph={{ rows: 1 }} />
        </div>
      ) : (
        <div>
          <Tooltip title={detailData.data.about} placement="top">
            <Paragraph className="line-clamp-3">
              {detailData.data.about}
            </Paragraph>
          </Tooltip>
        </div>
      )}

      <Button
        type="primary"
        danger
        className="!bg-[#ee2127] hover:!bg-[#ee2127bf] w-full rounded-lg py-6 flex items-center justify-center font-bold"
        size="large"
      >
        Follow
      </Button>
    </div>
  );
}
