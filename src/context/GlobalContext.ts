import React from "react";
import { GlobalDataType } from "types/globalContext";

export const GlobalContext = React.createContext<{
  globalData: GlobalDataType;
  setGlobalData: React.Dispatch<React.SetStateAction<GlobalDataType>>;
}>({
  globalData: {} as GlobalDataType,
  setGlobalData: (_globalData: GlobalDataType) => {},
});
