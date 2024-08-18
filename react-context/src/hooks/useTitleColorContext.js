import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext);

    if(!context) {
        throw new Error('useCounterContext must be used within a CounterContextProvider')
    }

    return context;
}