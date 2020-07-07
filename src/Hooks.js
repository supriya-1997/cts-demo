import React, { useState, useEffect } from 'react'
const Hooks = () => {
    const [employees, setEmployees] = useState([])
    const [isAPILoaded, setIsAPILoaded] = useState(false)
    const [payload, setPayload] = useState({
        name: "",
        isPromoted: true,
        salary: ""
    })
    const [totalSalaryCredited, setTotalSalaryCredited] = useState(0)
    useEffect(() => {
        fetch('https://jsonblob.com/api/a51e5186-94cf-11ea-9b86-b79b0865c9d0').then(response => response.json()).then(json => {
            setTimeout(() => {
                setEmployees([...json])
                setIsAPILoaded(true)
            }, 2000)
        })
    }, []);
    useEffect((prevState) => {
        setTotalSalaryCredited (employees.reduce((acc, item) => acc + parseInt(item.salary), 0))
    }, [employees])
    const updateData = (e, index) => {
       
        employees[index].isPromoted = e.target.checked;
        setEmployees([...employees])
    }
    const handleInput = (e) => {
        const { value, id } = e.target;
        setPayload ({ ...payload, [id]: value })
    }
    const addEmployee = () => {
        
        setEmployees([...employees, payload])
    }
    const deleteEmployees = () => {
        
        setEmployees([...employees.filter(employees => !employees.isPromoted)])
    }
    let checked = employees.filter(employees => employees.isPromoted);
    return (
        <>
            {!isAPILoaded ? (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAbFBMVEX///8Aru8Ap+4ArO8Apu4Aqu4Aqe7k9P2t3PiAyvRsxPNxxfP5/v9+yPTX7/y+4vknsO/P6/tCuPEutfBGtvDJ6Prz+/6S1vfs9/2c1vZawfJ2yfSj2fdTvvKp3/ia2/i04flkvvKD0faY0vaL2V9XAAACHUlEQVR4nO3a246qMBSAYUsPHERREB0HxpnNvP877hLjTkYQuJhNCf2/xKikF6sr9NzNBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAczuXt9nn7sp/PMnUdzCKUt/Lt358wakqHsSxDpvdPT/4cMieRLEWYK9l+Rd/N5XJprl/hZhOZIA9dB+ZOpKQIsrrJHo3nLbtkJyGkipzG5VAcCKH19/nHw/NVayGC2FFMjiXG1n3bHWjSrc2VSRxE5NyuTUl/d5q1SdnNHM8CRMrW+3nMedjbfPnXp4Q2JcGrlNik2DdF+Tb6nF42nLu2+Zxmi2YRbJXldrDETg4nbX0OdhQeXtqkdkQ+zBTNIpRK6LEuNNJC+bT2SWzDGC1km5dPkxRb3fGJajwlcatxDERw/KVSa3GVwoxvHqVGyOsM0SzDVop8QrF8bLxek3xa75lMS906FEJP2QuItSj+eyxLUQjZTCjW+JUT3pNn9CddjDtdzE+6mMf2YL3Txbq4i/2THuyzdbX7scMHOP7tx7Jv34PznR6cA/YYOi9Wfp4Xc6+gV6za+yf1z6yktc/3T+73lIQ2Vfm4lnMuK2Mz4mVf8hDmtpkIaUzxXlXVe2GMTZLw+j6blR3ad8XmRWp5/6E8v/fYOiba3PNh82J04tH2wJB9XX3kef5R1a9ncQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+1V97zBGliblQywAAAABJRU5ErkJggg==" />) : (
                <div>
                    <button type="button" class="btn btn-primary">
                        Total Salary <span class="badge badge-light">${
                            totalSalaryCredited
                        }</span>
                    </button>
                    <div class="container">
                        <div class="jumbotron text-center"><h1>Employee Details</h1></div>
                        {!employees.length ? (
                            <div class="alert alert-danger" role="alert">
                                No recocds found. Please add new item below
                            </div>
                        ) : (
                                <ul>
                                    {employees.map(({ name, isPromoted, salary }, index) =>
                                        <li class="list-group-item ">
                                            <div class="row">
                                                <div class="col-3">{name}</div>
                                                <div class="col-3">${salary}</div>
                                                <div class="col-3"><input type="checkbox" onChange={(e) => updateData(e, index)} defaultChecked={isPromoted}></input>{!!isPromoted ? 'promoted' : 'not promoted'}</div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            )}
                    </div>
                    <div className="row">
                        <div class="col">
                            <label htmlFor="ide">Employee Id</label>
                            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="name" placeholder="Enter name" />
                            <label htmlFor="ide">Salary</label>
                            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="salary" placeholder="Enter salary" />
                            <button type="button" onClick={() => addEmployee()} className="btn btn-primary">Add</button>
                            <button type="button" onClick={() => deleteEmployees()} className="btn btn-danger">Delete</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary">
                                Total Salary <span class="badge badge-light">{
                                    totalSalaryCredited
                                }</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Hooks

