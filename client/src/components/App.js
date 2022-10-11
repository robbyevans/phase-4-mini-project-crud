import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NewEventForm from "./NewEventForm";
import EventItem from "./EventItem";


//aded new section
// import SignUp from "./SignUp";
// import Login from "./Login";
// import NavBar from "./NavBar";
// import Home from "./Home";

// import Login from "../pages/Login";

function App() {
  const [events, setEvents] = useState([]);
  const[isTrue,setIsTrue]=useState(true)
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/spices")
      .then((r) => r.json())
      .then(setEvents);
  }, []);

  //auto-Login


  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  function handleAddSpice(addedSpice) {
    setEvents((events) => [...events, addedSpice]);
  }

  function handleUpdateSpice(updatedSpice) {
    setEvents((events) =>
      events.map((spice) => {
        return spice.id === updatedSpice.id ? updatedSpice : spice;
      })
    );
  }

  function handleDeleteSpice(deletedSpice) {
    setEvents((events) =>
      events.filter((spice) => spice.id !== deletedSpice.id)
    );
  }

  function handleClick(){
    setIsTrue(!isTrue)
  }

  return (
    <>
      <Header spiceCount={events.length} />
      <main>

      <button className="btn" onClick={handleClick}> Add Event +</button>
      {isTrue ? <div className="sidebar"><NewEventForm onAddSpice={handleAddSpice} /></div> : null} 
      <div><h1>Available events</h1></div>  
        <section className="spice-list">
          {events.map((spice) => (
            <EventItem
              key={spice.id}
              spice={spice}
              onUpdateSpice={handleUpdateSpice}
              onDeleteSpice={handleDeleteSpice}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
