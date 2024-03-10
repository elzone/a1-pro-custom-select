import { ReactNode } from "react";

type CustomSelectButtonProps = {
  isOpen: boolean;
  selectedValue: string;
  onSelectButtonClick: (e: React.MouseEvent) => void;
  children: ReactNode;
};

const CustomSelectButton = ({
  isOpen,
  selectedValue,
  onSelectButtonClick,
  children,
}: CustomSelectButtonProps) => {
  return (
    <div className={"relative"}>
      <button
        type={`button`}
        className={`border border-gray300 rounded-md px-4 h-[34px] w-60 uppercase text-gray300 text-base font-semibold hover:bg-black700`}
        onClick={onSelectButtonClick}
      >
        {selectedValue}
      </button>
      {isOpen && <>{children}</>}
    </div>
  );
};

export { CustomSelectButton };
