import React,{createContext, useContext,useState} from "react";


export const SearchOptionContext = createContext();

const initialState = {
    destination:'',
    date:[{startDate: new Date(),endDate: new Date(),key: 'selection'}],
    occupancyOptions:{adult:1,child:0,room:1}
};

// wrap App with this component
export const SearchOptionContextProvider =({children}) => {

    const [destination,setDestination] = useState(initialState.destination)
    const [date, setDate] = useState(initialState.date);
    const [occupancyOptions, setOccupancyOptions] = useState(initialState.occupancyOptions);

 
    return (
        <SearchOptionContext.Provider value={{
            destination,
            setDestination,
            date,
            setDate,
            occupancyOptions,
            setOccupancyOptions
        }}>
            {children}
        </SearchOptionContext.Provider>
    )
}

// import useSampleContext hook to access global state 
export const useSearchOptionContext =() => useContext(SearchOptionContext) 