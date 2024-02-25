import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth.jsx';
import { Navv } from './nav/nav.js';
import { Button, Container, Table } from 'react-bootstrap';
import "./home.css"

const Home = () => {
  const {data } = useAuth();
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    alert("saving");
    setEditMode(false);
    // Perform save action here
  };
  return (
    <div>
      <Navv/>
      
      <Container style={{width:"60%",border:"solid 1px black",padding:"10px"}}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={data.image}
        alt={"img"}
        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
      />
      
      <div style={{ marginLeft: '3%' }}>
        <h5>{data.firstName+" "+data.lastName}</h5>
      <h7>{"Member Technical"}</h7>
      </div>
    </div>
   <br></br>
   <hr></hr>
   
   

   <div style={{ display: 'flex', alignItems: 'center' }}>
      <h5 style={{ color: "#387ADF", paddingTop: "10px", marginLeft: "2%", marginRight: "auto" }}>General Information</h5>
      {editMode ? (
        <Button onClick={handleSaveClick} style={{ marginLeft: "10px" }}>Save</Button>
      ) : (
        <Button onClick={handleEditClick} style={{ marginLeft: "10px" }}>Edit</Button>
      )}
    </div>
<div className="basicDetailsCont">
  <div className="row">
    <div className='feild'>Employee Id</div>
   { !editMode ? <div className='feild-value'>{"56522"}</div> :
     <input type="text" defaultValue={"56522"} style={{ width: "75%" }}  />  }
  </div>
  <div className="row">
    <div className='feild'>Mobile Number</div>
   { !editMode ? <div className='feild-value'>{"9812345670"}</div> :
     <input type="text" defaultValue={"9812345670"} style={{ width: "75%" }}  />  }
  </div>
  <div className="row">
    <div className='feild'>Blood Group</div>
   { !editMode ? <div className='feild-value'>{"O Positive"}</div> :
     <input type="text" defaultValue={"O Positive"} style={{ width: "75%" }}  />  }
  </div>
  <div className="row">
    <div className='feild'>Email Address</div>
   { !editMode ? <div className='feild-value'>{"Alexz@gmail.com"}</div> :
     <input type="text" defaultValue={"Alexz@gmail.com"} style={{ width: "75%" }}  />  }
  </div>
  <div className="row">
    <div className='feild'>Address</div>
   { !editMode ? <div className='feild-value'>{"Hyderabad"}</div> :
     <input type="text" defaultValue={"56522"} style={{ width: "75%" }}  />  }
  </div>
  <div className="row">
    <div className='feild'>Gender</div>
   { !editMode ? <div className='feild-value'>{"Male"}</div> :
     <input type="text" defaultValue={"Male"} style={{ width: "75%" }}  />  }
  </div>

  <div className="row">
    <div className='feild'>Covid Vaccination Status</div>
   { !editMode ? <div className='feild-value'>{"True"}</div> :
     <input type="text" defaultValue={"True"} style={{ width: "75%" }}  />  }
  </div>
  <div className="row">
    <div className='feild'>Milestone Points</div>
   { !editMode ? <div className='feild-value'>{"10.0"}</div> :
     <input type="text" defaultValue={"10.0"} style={{ width: "75%" }}  />  }
  </div>
  </div>
    </Container>

    
     
    

    </div>
  );
}

export default Home;
