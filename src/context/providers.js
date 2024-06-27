import React from "react";
import { DocumentContext } from "./contexts";

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
