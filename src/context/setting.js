import React,{useState} from 'react';


export const SettingsContext = React.createContext();
function SettingsProvider(props) {
  const [complete, toggleComplete] = useState(false);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [sortBy, setSortBy] = useState('difficulty');
  const [firstPage, setFirstPage] = useState(1);
  const state = {
    complete,
    itemsPerScreen,
    sortBy,
    firstPage,
    toggleComplete,
    setItemsPerScreen,
    setSortBy,
    setFirstPage,
  }
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}
export default SettingsProvider;

// Create a context for managing application settings and provide this at the application level
// Display or Hide completed items (boolean)
// Number of items to display per screen (number)
// Default sort field (string)
// You may manually set (hard code) those state settings in the context provider during development
// Pagination Notes:

// Only display the first n items in the list, where n is the number to display per screen in your context.
// If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
// If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.
