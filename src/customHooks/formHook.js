import { useState } from 'react';
const useForm = (props) => {
  const [state, setState] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(state);
    const items = {};
    setState({ items });
    // console.log(state);
    // cb(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return [state, handleChange, handleSubmit];
};

export default useForm;