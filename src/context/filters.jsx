import { createContext, useState } from "react";

//? creamos el context
export const FiltersContyext = createContext();

//? proveer el contexto

export function FiltersProvider ( { children } ){

    const [filters, setFilters ] = useState({
        category: 'all'
    });

    return(
        <FiltersContyext.Provider value={{
            filters,
            setFilters,
        }}
        >
            { children }
        </FiltersContyext.Provider>
    )

}