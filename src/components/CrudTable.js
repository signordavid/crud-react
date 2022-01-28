import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return  <div>
     <h3>Tabla de datos</h3>
    
     <table className="table table-dark table-hover">
        <thead>
            <tr>
               <th>Nombre</th>
               <th>Constelación</th>
               <th>Acciones</th> 
            </tr>
        </thead>
        <tbody>
          {data.length ===0?<tr><td colspan="3">Sin Datos</td></tr>:data.map((el)=><CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)}
        </tbody>
       </table> 
     
  </div>;
};


export default CrudTable;