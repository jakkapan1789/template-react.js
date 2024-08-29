import { useContext } from "react";
import { DocumentContext, LoadingContext } from "./contexts";

export const useDocument = () => useContext(DocumentContext);
export const useLoading = () => useContext(LoadingContext);
