import React from "react";
import { DocumentContext, LoadingContext } from "./contexts";

export const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = React.useState([]);
  const [searchOption, setSearchOption] = React.useState("id");
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,
        searchOption,
        setSearchOption,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
