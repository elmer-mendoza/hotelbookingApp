import {useState} from 'react'
import "./header.css"
import {DateRange} from "react-date-range"
import {format} from "date-fns"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCalendarDays,faBed, faPerson } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom';
import { useSearchOptionContext } from '../../context/searchOptionContextProvider';


const SearchBarOptions = ({options,handleOption}) => {
  
  const {adult,child,room} = options
  console.log(options)
  const occupancyOptions =  [
      {numberOfOccupant:adult, typeOfOccupant:"Adults",string:"adult"},
      {numberOfOccupant:child, typeOfOccupant:"Children",string:"child"},
      {numberOfOccupant:room, typeOfOccupant:"Rooms", string:"room"}
    ]
  return (
    occupancyOptions.map(({numberOfOccupant,typeOfOccupant,string})=>{
    return(
      <div className="header__searchBarOptionItem">
        <div className="header__searchBarOptionText">{typeOfOccupant}</div>
        <div className="header__searchBarOptionCounter">
          <button className="header__searchBarOptionBtn" disabled={numberOfOccupant <= (typeOfOccupant==="Children" ? 0 : 1)} onClick={()=>handleOption(string,"d")}>-</button>
          <span className="header__searchBarOptionNum">{numberOfOccupant}</span>
          <button className="header__searchBarOptionBtn" onClick={()=>handleOption(string,"i")}>+</button>
        </div>
      </div>
    )}
    )
  )
}

const HeaderSearchBar = (props) => {
  const [openDate,setOpenDate,setDate,date,start,end,destination,setDestination] =props.searchBarDate;
  const [occupancyOptions,setOccupancyOptions,openOption,setOpenOption] =props.searchBarOption;
  const {adult,child,room} =occupancyOptions;

  const navigate = useNavigate()

  const handleOption = (name,operation) => {
    setOccupancyOptions(prev=>{
      return {
      ...prev,
      [name]: operation === "i" ? prev[name]+1 : prev[name]-1
     }
  })
  }

  const handleSearch = () => {
    navigate('/hotels',{state:{destination,date,occupancyOptions}})
  }

  return(
  <div className="header__searchBar">
    <div className="header__searchBarItem">
      <FontAwesomeIcon icon={faBed} className="header__icon"/>
      <input type="text"placeholder="Where are you going ?" className="header__searchBarInput" onChange={(e)=> setDestination(e.target.value)} value={destination}/>
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
        <SearchBarOptions options={occupancyOptions} handleOption={handleOption}/>
      </div>
      }
    </div>
    <div className="header__searchBarItem">
      <button className="header__btn" onClick={handleSearch}>Search</button>
    </div>
  </div>
  )
}


const Header = () => {
 
  
  const {destination,setDestination,date, setDate,occupancyOptions,setOccupancyOptions} = useSearchOptionContext()
  const {startDate,endDate} = date[0];
  const start = format(startDate,"MMM/dd/yyyy");
  const end = format(endDate,"MMM/dd/yyyy");
 
  const [openDate,setOpenDate] = useState(false)
  const [openOption,setOpenOption] = useState(false)
  

  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
        <p className="header_desc">Get rewarded for your travels - unlock instant savings of 10% or more with a free BM Square account</p>
        <button className="header__btn">Sign in / Register</button>
        <HeaderSearchBar 
        searchBarDate={[openDate,setOpenDate,setDate,date,start,end,destination,setDestination]}
        searchBarOption={[occupancyOptions,setOccupancyOptions,openOption,setOpenOption]}
        />
      </div>
    </div>
  )
}

export default Header