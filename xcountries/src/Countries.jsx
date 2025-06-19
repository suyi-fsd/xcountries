import {useState , useEffect} from 'react';
function Countries(){
    const Card = ({flagUrl,countryName}) =>{
        return(
            <div className="countryCard"
            style={{
                display:'flex',
                justifyContent:"center",
                alignItems:"center",
                margin:"10px",
                padding:"10px",
                border:"solid 1px grey",
                borderRadius:"8px",
                flexDirection:"column",
                width:"200px",
                height:"200px"
            }}>
                <img src={flagUrl} alt={countryName} style={{width:"80px", height:"80px"}} />
                <h2>{countryName}</h2>
            </div>
        )

    }
    const [countries,setCountries] =useState([]);
    const API_ENDPOINT = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    useEffect(()=>{
        fetch(API_ENDPOINT)
        .then((response)=> response.json())
        .then((data)=> setCountries(data))
        .catch((e)=>{
            console.log("error occured");
            console.error("Error fetching data:",e)
        });
    },[]);
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            flexWrap:"wrap"
        }}>
        {countries.map((country)=><Card key={country.common} flagUrl={country.png} countryName={country.common}/>)}
        
        </div>
    )
}   

export default Countries;