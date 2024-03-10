"use client";

import { OptionType } from "@/components/custom-select/custom-select";
import { Fragment, useLayoutEffect, useRef, useState } from "react";
import useClickOutside from "@/lib/hooks/use-click-outside";
import { createPortal } from "react-dom";
import { Arrow } from "@/components/svg-icons/arrow";

type CustomSelectOptionsProps = {
  options: OptionType[];
  setSelectedValue: (value: string) => void;
  setIsOptionsOpen: (value: boolean) => void;
  selectRef: any;
  selectCoordinates: { x: number; y: number };
};

const CustomSelectOptions = ({
  options,
  setSelectedValue,
  setIsOptionsOpen,
  selectRef,
  selectCoordinates,
}: CustomSelectOptionsProps) => {
  const [position, setPosition] = useState({ left: `0`, top: `0` });
  const selectOptionsRef = useRef(null);

  useClickOutside(selectOptionsRef, setIsOptionsOpen, selectRef);

  useLayoutEffect(() => {
    const left = `${
      selectCoordinates.x - (selectRef as HTMLElement).offsetWidth
    }px`;
    const top = `${selectCoordinates.y + window.scrollY}px`;
    setPosition({
      left,
      top,
    });
  }, [selectCoordinates]);

  const onOptionClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    const value = target.dataset.value;
    if (value) {
      setSelectedValue(value);
    }
  };

  const optionsLength = options.length;
  const selectWidth = selectRef?.offsetWidth;

  const selectOptions = () => {
    return createPortal(
      <ul
        ref={selectOptionsRef}
        className={`m-0 p-0 border border-gray300 rounded-md mt-2 absolute`}
        onClick={onOptionClick}
        style={{
          left: position.left,
          top: position.top,
          width: selectWidth,
        }}
      >
        {options.map((option, index) => {
          const { label, value } = option;
          const isFirstOption = index === 0;
          const isLastOption = index === optionsLength - 1;
          return (
            <Fragment key={value}>
              <li
                data-value={value}
                className={`px-4 h-11 flex items-center justify-between w-full uppercase text-gray300 text-base font-semibold cursor-pointer hover:bg-black700 ${
                  isFirstOption ? `rounded-t-md` : ``
                } ${isLastOption ? `rounded-b-md` : ``}`}
              >
                {label} <Arrow />
              </li>
              {index < optionsLength - 1 && (
                <div className={`border-t border-gray300`} />
              )}
            </Fragment>
          );
        })}
      </ul>,
      document.getElementById("portals") as Element
    );
  };

  return <>{selectOptions()}</>;
};

export { CustomSelectOptions };
