import { useEffect, useState } from "react";
import useSwr from "swr";
import { TAB_TYPE } from "../constant";

export default function useDetailProfile() {
  const [activeTab, setActiveTab] = useState<string>(TAB_TYPE.NEWS);

  const onChangeTab = (newActiveTab: string) => setActiveTab(newActiveTab);

  const fetcher = (args: any) => fetch(args).then((res) => res.json());
  const { data: detailData, error: errorDetailData } = useSwr(
    "http://localhost:3000/api/detail",
    fetcher
  );

  return {
    activeTab,
    onChangeTab,
    detailData: {
      isLoading: !detailData,
      isError: errorDetailData,
      data: detailData,
    },
  };
}
