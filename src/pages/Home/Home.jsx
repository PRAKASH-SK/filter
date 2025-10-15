import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";

const Home = () => {
  const [name,setName]=useState("");
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Maldives Paradise",
      location: "Maldives",
      description: "Experience crystal-clear waters and luxurious overwater villas."
    },
    {
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      title: "Swiss Alps",
      location: "Switzerland",
      description: "Enjoy breathtaking mountain views and cozy ski resorts."
    },
    {
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      title: "Santorini",
      location: "Greece",
      description: "Discover the white-washed houses and sunset views in Oia."
    },
    {
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Kyoto Temples",
      location: "Japan",
      description: "Explore ancient temples and cherry blossom gardens."
    },  
{
  image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
  title: "Paris City Lights",
  location: "France",
  description: "Fall in love with the Eiffel Tower, art museums, and romantic cafes."
},
{
  image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
  title: "New York City",
  location: "USA",
  description: "Discover Times Square, Central Park, and the city that never sleeps."
},
{
  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  title: "Machu Picchu",
  location: "Peru",
  description: "Explore ancient Incan ruins high in the Andes Mountains."
},
{
  image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  title: "Cappadocia Hot Air Balloons",
  location: "Turkey",
  description: "Float above fairy chimneys and colorful valleys at sunrise."
},
{
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  title: "Venice Canals",
  location: "Italy",
  description: "Sail through the canals, visit St. Mark’s Square, and enjoy Italian cuisine."
},
{
  image: "https://images.unsplash.com/photo-1491884662610-dfcd28f30cf6",
  title: "Serengeti Safari",
  location: "Tanzania",
  description: "Witness the great migration and Africa’s most majestic wildlife."


}

  ];

    const filteredData = destinations.filter((item) =>
    item.title.toLowerCase().includes(name.toLowerCase()) ||
    item.location.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className="homepage">
      <h1 className="homepage-title">Explore Beautiful Destinations 🌍</h1>
      <div className="inp">
       <input style={{width:"500px",height:"40px"}} type="text" placeholder="Search" value={name} onChange={(event)=>setName(event.target.value)}/>
      </div>


      <div className="card-container">
        {
          filteredData.length > 0 ? (
        filteredData .map((place, index) => (
          <Card
            key={index}
            image={place.image}
            title={place.title}
            location={place.location}
            description={place.description}
          />
        ))):(
          <p>No results found</p>
        )
      
      }
      </div>

    </div>
    );
};

export default Home;
