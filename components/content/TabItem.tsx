import React from "react";

type TPropsTabItem = {
  label: string;
  onChangeTab: () => void;
  isActive: boolean;
};

export default function TabItem({
  label,
  onChangeTab,
  isActive,
}: TPropsTabItem) {
  return (
    <div
      className={`cursor-pointer flex items-center justify-center 
        py-2.5 
        px-8
        md:px-9
        rounded-3xl
        font-bold
      ${isActive ? "bg-red-200  text-red-500" : "border border-gray-400"}`}
      onClick={onChangeTab}
      data-testid="tab-button"
    >
      <span className="text-sm">{label}</span>
    </div>
  );
}
