import { useEffect } from "react";

const useClickOutside = (ref: any, handler: any, initiatorElement?: any) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      console.log(ref, initiatorElement);
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        initiatorElement?.contains(event.target)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener, false);
    document.addEventListener("touchstart", listener, false);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, initiatorElement]);
};

export default useClickOutside;
