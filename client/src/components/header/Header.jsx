import {useState} from 'react'
import "./header.css"
import { headerIcons } from "../../data/data"
import {DateRange} from "react-date-range"
import {format} from "date-fns"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCalendarDays,faBed, faPerson } from "@fortawesome/free-solid-svg-icons"


const SearchBarOptions = ({options,handleOption}) => {
  
  const {adult,child,room} = options
  const occupancyOptions =  [
      {name:adult, type:"Adults",string:"adult"},
      {name:child, type:"Children",string:"child"},
      {name:room, type:"Rooms", string:"room"}
    ]
  return (
    occupancyOptions.map(({name,type,string})=>{
      console.log(name,type,string)
    return(
      <div className="header__searchBarOptionItem">
        <div className="header__searchBarOptionText">{type}</div>
        <div className="header__searchBarOptionCounter">
          <button className="header__searchBarOptionBtn" disabled={name <= (type=="Children" ? 0 : 1)} onClick={()=>handleOption(string,"d")}>-</button>
          <span className="header__searchBarOptionNum">{name}</span>
          <button className="header__searchBarOptionBtn" onClick={()=>handleOption(string,"i")}>+</button>
        </div>
      </div>
    )}
    )
  )
}

const HeaderSearchBar = (props) => {
  const [openDate,setOpenDate,setDate,date,start,end] =props.searchBarDate;
  const [option,setOption,openOption,setOpenOption] =props.searchBarOption;
  const {adult,child,room} =option;

  const handleOption = (name,operation) => {
     setOption(prev=>{
      return {
      ...prev,
      [name]: operation === "i" ? prev[name]+1 : prev[name]-1
     }
  })
  }

  return(
  <div className="header__searchBar">
    <div className="header__searchBarItem">
      <FontAwesomeIcon icon={faBed} className="header__icon"/>
      <input type="text"placeholder="Where are you going ?" className="header__searchBarInput"/>
    </div>
    <div className="header__searchBarItem" onClick={()=> setOpenDate(true)} onMouseLeave={()=> setOpenDate(false)}>
      <FontAwesomeIcon icon={faCalendarDays} className="header__icon"/>
      <span className="header__searchBarText">{`${start} to ${end}`}</span>
      {openDate && 
      <DateRange
        editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="header__calendar"
      />
      } 
    </div>
    <div className="header__searchBarItem" onClick={()=>setOpenOption(true)} onMouseLeave={()=>setOpenOption(false)}>
      <FontAwesomeIcon icon={faPerson} className="header__icon"/>
      <span className="header__searchBarText">{`${adult} Adults ${child} Children ${room} Rooms`}</span>
      {openOption &&
      <div className="header__searchBarOptions" >
        <SearchBarOptions options={option} handleOption={handleOption}/>
      </div>
      }
    </div>
    <div className="header__searchBarItem">
      <button className="header__btn">Search</button>
    </div>
  </div>
  )
}


const Header = () => {
 
  const [openDate,setOpenDate] = useState(false)
 
  const [date, setDate] = useState([{startDate: new Date(),endDate: new Date(),key: 'selection'}]);
  const {startDate,endDate} = date[0];
  const start = format(startDate,"MMM/dd/yyyy");
  const end = format(endDate,"MMM/dd/yyyy");
 
  const [openOption,setOpenOption] = useState(false)
  const [option, setOption] = useState({adult: 1, child: 0,room: 1});

  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
        <p className="header_desc">Get rewarded for your travels - unlock instant savings of 10% or more with a free BM Square account</p>
        <button className="header__btn">Sign in / Register</button>
        <HeaderSearchBar 
        searchBarDate={[openDate,setOpenDate,setDate,date,start,end]}
        searchBarOption={[option,setOption,openOption,setOpenOption]}
        />
      </div>
    </div>
  )
}

export default Header