import React,{createContext,useState} from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children })=>{
    const [searchTxt,setSearchTxt] = useState("");

    const updateSearchText = (text)=>{
        setSearchTxt(text);
    }

    return <SearchContext.Provider value={{searchTxt,updateSearchText}}>{children}</SearchContext.Provider>
}