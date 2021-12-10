import React from "react";
import { SleepEntry } from "../types";

const APPSTATE = {
    loggedin: false,
    setLoggedIn: (logged: boolean) => { },
    name: "",
    setName: (str: string) => { },
    age: 21,
    setAge: (newage: number) => { },
    sleepEntries: Array<SleepEntry>(),
    setSleepEntries: (newEntry: Array<SleepEntry>) => { },
}
export const AppContext = React.createContext(APPSTATE);