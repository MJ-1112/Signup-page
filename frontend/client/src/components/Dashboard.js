import React from "react";
import {Link}  from 'react-router-dom';

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
          
        <Link to ='/'><button style={{
          borderRadius:12,
          width:100,
          height:20,
          backgroundColor:'wheat',
          color:'black'
        }}>Logout</button></Link>
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
