import React from "react";

function Dashboard() {
  return (
    <div
    style={{
        backgroundColor:'#262626',
        height:'100vh',
        width:'100vw',
        overflow:'hidden'
    }}>
      <nav>
        <ul
          style={{
            backgroundColor: "#36454F",
            margin:0,
            display:'inline',
            display:'flex',
            gap:30,
            listStyle:'none',
            height:100,
            fontSize:30,
            alignItems:"center",
            color:"white",

            
          }}
        >
          <li
          style={{
            cursor:'pointer'
          }}>Home</li>
          <li
          style={{
            cursor:'pointer'
          }}>Projects</li>
          <li
          style={{
            cursor:'pointer'
          }}>Events</li>
          <li
          style={{
            cursor:'pointer'
          }}>Services</li>
          <li
          style={{
            cursor:'pointer'
          }}>Contact</li>
        </ul>

      </nav>
      <h1
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:"white"
      }}>
        Welcome
      </h1>
    </div>
  );
}

export default Dashboard;
