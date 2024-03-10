"use client";

import {
  CustomSelectButton,
  CustomSelectOptions,
} from "@/components/custom-select";
import { useLayoutEffect, useRef, useState } from "react";

export type OptionType = {
  label: string;
  value: string;
};

const options: OptionType[] = [
  {
    label: `account`,
    value: `account`,
  },
  {
    label: `wallet`,
    value: `wallet`,
  },
  {
    label: `bonuses`,
    value: `bonuses`,
  },
  {
    label: `bets`,
    value: `bets`,
  },
  {
    label: `history`,
    value: `history`,
  },
];

const CustomSelect = () => {
  const [selectedValue, setSelectedValue] = useState(`Account`);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectCoordinates, setSelectCoordinates] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const [selectRef, setSelectRef] = useState(null);

  useLayoutEffect(() => {
    setSelectRef(ref.current);
  }, []);

  const onSelectedValueChange = (value: string) => {
    setSelectedValue(value);
    updateIsOptionsOpen(false);
  };

  const onSelectButtonClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
    setSelectCoordinates({ x: rect.x + rect.width, y: rect.y + rect.height });
    updateIsOptionsOpen(!isOptionsOpen);
  };

  const updateIsOptionsOpen = (value: boolean) => {
    setIsOptionsOpen(value);
  };

  return (
    <div className={`relative`}>
      <div ref={ref}>
        <CustomSelectButton
          isOpen={isOptionsOpen}
          selectedValue={selectedValue}
          onSelectButtonClick={onSelectButtonClick}
        >
          <CustomSelectOptions
            options={options}
            setSelectedValue={onSelectedValueChange}
            selectRef={selectRef}
            setIsOptionsOpen={() => setIsOptionsOpen(false)}
            selectCoordinates={selectCoordinates}
          />
        </CustomSelectButton>
      </div>
    </div>
  );
};

export { CustomSelect };
