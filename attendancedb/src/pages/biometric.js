import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/Header/header';
import Info from '../components/Info/Info';
import { getEmployee } from '../redux/ducks/employees';

const init = {
    firstname:'',
    middlename:'',
    lastname:'',
    assign:'',
    empID:'',
    internalID:''
}



const Biometric = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployee());
      }, [dispatch]);

      const employee = useSelector((state) => state.employee.employee);

      const [info, setInfo] = useState(init)
      const [barcode, setBarcode] = useState('')

      console.log('data', employee);

      const search = (barcode) => {
        setBarcode(barcode)
        var data = employee.filter(emp => emp.internalID === barcode)
        setInfo(data)
        console.log('search', data)
      }

    return (
        <main>
            <center>
                <Header />
                <input type='text' value={barcode} onChange={e => search(e.target.value)}/>
                <Info 
                    firstname={info.fname}
                    middlename={info.mname}
                    lastname={info.lanme}
                    assign={info.assign}
                    empID={info.empID}
                    internalID={info.internalID}
                />
            </center>
        </main>
    );
}

export default Biometric;