import { useState } from "react";


export const AmenityForm = () => {
    const [amenityName, setAmenityName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
       //     const amenity = { amenityName };
           // const response = await hotelService.createAmenity(amenity); 
          //  console.log("Amenity created:", response.data);
          //  setAmenityName(response.data); 
        } catch (error) {
            console.error("Error creating amenity:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="amenityName">Amenity Name:</label>
            <input
                type="text"
                id="amenityName"
                value={amenityName}
                onChange={(e) => setAmenityName(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};