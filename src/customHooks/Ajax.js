import { useState } from 'react';
const useAjax = (props) => {
    const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";
  const [list, setList] = useState([]);
  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };
  
  const _toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((savedItem) => {
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem : listItem
            )
          );
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: "get",
      mode: "cors",
    })
      .then((data) => data.json())
      .then((data) => setList(data.results))
      .catch(console.error);
  };

  const _deleteTask =  (id)=>{
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'delete',
        mode: 'cors',
      }).then((data) => data.json())
      .then((data) =>{
        console.log(data);
        const newList = list.filter(item => item !== data)

        setList(newList)
        _getTodoItems()
      })
      .catch(console.error);
    }
}

  return [list, _addItem, _toggleComplete, _getTodoItems, _deleteTask ];
};

export default useAjax;