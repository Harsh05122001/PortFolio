import { useState, createContext } from 'react';
import {singleProjectData as data} from "../data/singleProjectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children ,id }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		data[id-1]
	);
	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
