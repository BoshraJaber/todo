import React,{useContext} from "react";
import { LoginContext } from './context';
import { If } from 'react-if';


const Auth = (props) => {
	const loginContext = useContext(LoginContext);
	let okToRender = false;
	try {
		okToRender =
			loginContext.loggedIn && props.capability
				? loginContext.user.user.capabilities.includes(props.capability)
				: false;
	} catch (error) {
		console.log('NOT AUTHORIZED', error.message);
	}
	return <If condition={okToRender}>{props.children}</If>;
};

export default Auth;



// const If = props => {
//   return props.condition ? props.children : null;
// };


    // <Auth> <div /> </Auth>
    /// are you logged in?
    /// was there no capability specified?

    // <Auth capability="foo"> <div /> </Auth>
    /// are you logged in?
    /// Is there a capability that we care about?
    /// do you have it?

 
