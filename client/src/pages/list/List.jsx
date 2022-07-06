import { useState } from "react"
import "./list.css"
import {useSearchOptionContext} from "../../context/searchOptionContextProvider.jsx"
import {format} from "date-fns"
import {DateRange} from "react-date-range"
import SearchedItem from "../../components/searchedItem/SearchedItem"



function List() {
    const [openDate,setOpenDate] = useState(false)
    const {destination,setDestination,date,setDate,occupancyOptions,setOccupancyOptions} = useSearchOptionContext()
    const {adult,child,room} =occupancyOptions
    const {startDate,endDate} = date[0];
    const start = format(startDate,"MMM/dd/yyyy");
    const end = format(endDate,"MMM/dd/yyyy");

      const handleUpdateOption = e => {
        setOccupancyOptions(prev=>{
          return {
          ...prev,
          [e.name]: parseInt(e.value)
         }
      })
      } 

  return (
    <div className='list'>
      <div className="list__wrapper">
        <div className="list__search">
          <h1 className="list__title">Search</h1>
          <div className="list__item">
            <label>Destination</label>
            <input type="text" value={destination} onChange={(e)=>setDestination(e.target.value)}/>
          </div>
          <div className="list__item" onClick={()=> setOpenDate(true)} onMouseLeave={()=> setOpenDate(false)}>
            <label>Check-in Date</label>
            <span className="list__itemSpan">{`${start} to ${end}`}</span>
            {openDate && 
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              onChange={item => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
              rangeColors={['#0000ff']}
              className="list__calendar"
            />}
          </div>
          <div className="list__item">
            <label>Options</label>
            <div className="list__optionList">
              <div className="list__optionItem">
                <label>Min price (per night)</label>
                <input type="number" min={0} />
              </div>
              <div className="list__optionItem">
                <label>Max price (per night)</label>
                <input type="number" min={0}/>
              </div>
              <div className="list__optionItem">
                <label>Adult</label>
                <input type="number" min={1} value={adult} name="adult" onChange={(e)=>handleUpdateOption(e.target)}/>
              </div>
              <div className="list__optionItem">
                <label>Children</label>
                <input type="number" min={0} value={child} name="child" onChange={(e)=>handleUpdateOption(e.target)}/>
              </div>
              <div className="list__optionItem">
                <label>Rooms</label>
                <input type="number" min={1} value={room} name="room" onChange={(e)=>handleUpdateOption(e.target)}/>
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="list__result">
          <SearchedItem/>
          <SearchedItem/>
          <SearchedItem/>
          <SearchedItem/>
          <SearchedItem/>
          <SearchedItem/>
          <SearchedItem/>
          <SearchedItem/>
        </div>
      </div>
    </div>
  )
}

export default List