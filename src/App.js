import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./App.css";
import dataList from "./data.json";

function App() {
  let [list, setList] = useState(dataList.list);
  let [list2, setList2] = useState(dataList.list);
  
  let byUpvotes = (e) => {
    let newarr = list.slice().reverse();
    setList(newarr);
  };

  let mostRecents = () => {
    let newarr = list.slice().reverse();
    setList(newarr);
  };

  let search = (e)=>{
    let val = e.target.value 
    if(val.length > 0){
      let result = list2.filter(item=> item.title.includes((val)))
      setList(result)
    }else{
      setList(list2)
    }


  }

  return (
    <div className="App">
      <div className="header">Sorting List</div>

      <div className="listitems">
        <div className="btnsOuter">
          <input
            type="text"
            className="searchfield"
            placeholder="Search By Title"
            onChange={search}
          />
          <button className="upvotes btn" onClick={byUpvotes}>
            Most Upvotes
          </button>
          <button className="recents btn" onClick={mostRecents}>
            Most Recent
          </button>
        </div>
        {list.map((item, key) => (
          <div className="_wrp_ls">
            <div className="title">{item.title}</div>
            <div className="desc">
              <div className="date">{item.date}</div>
              <div className="upvotes">Upvotes: {item.upvote}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
