import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initailDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
      },
      {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
      },
      {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
      },
      {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
      },
      {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
      },

];

 const CrudApp = () => {
   const[db, setDb]= useState(initailDb);
   const[dataToEdit, setDataToEdit] = useState(null);

  const createData = (data)=>{ 
    data.id=Date.now();
    setDb([...db, data]);

  };
  const updateData =(data)=>{
    let newData = db.map(el=> el.id === data.id ? data : el);
    setDb(newData);
  };
  const deleteData =(id)=>{
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };



  return( <div>
      <h2> React CRUD</h2>
      <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
      <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      </div>);
};

export default CrudApp;