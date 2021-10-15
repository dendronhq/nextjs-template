import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "@dendronhq/common-frontend-v2";

export const useEngineAppDispatch = () => useDispatch<AppDispatch>();
export const useEngineAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
