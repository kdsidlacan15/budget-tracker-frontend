import { createContext, useState, useEffect } from 'react';

export const ApplicationContext= createContext()

export default function ApplicationsProvider(props){


	const [income,setIncome] = useState([])

	useEffect(()=>{
		fetch('http://localhost:4000/api/income')
		.then(res=> res.json())
		.then(data=>{
			setIncome(data)
		})
		.catch(err=>console.log(err))
	},[])

	return (
		<ApplicationContext.Provider
			value={'hello'}
		>
			
			{props.children}
		</ApplicationContext.Provider>
	)
}