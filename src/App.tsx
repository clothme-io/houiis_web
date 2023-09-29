import './App.css'
import { useRef, useEffect, useState } from "react";

function App() {
  const [address, setAddress] = useState({
    number: '',
    street_address: '',
    neighborhood: '',
    county: '',
    city: '',
    state: '',
    zip_code: '',
  })
  const autoCompleteRef: any = useRef();
  const inputRef: any = useRef();
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "name"],
    strictBounds: false,
  };

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event.target)
    // this is just some redux.
    // just trust that it does what it's supposed to do,
    // send an ajax request to my server
  }

  // const handleChange = (event: any) => {
  //   // setAddress({ [event.target.name]: event.target.value })
  //   console.log(event.target.value)
  // }

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const addressObj = {
        number: place.address_components[0].long_name,
        street_address: place.address_components[1].long_name,
        neighborhood: place.address_components[2].short_name,
        county: place.address_components[4].short_name,
        city: place.address_components[3].long_name,
        state: place.address_components[5].long_name,
        zip_code: place.address_components[7].long_name,
      }
      setAddress(addressObj)
    });
  }, []);

  // useEffect(() => { console.log(address); }, [address]);

  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
      <div>
        <h1>Add New Address</h1>
        <form onSubmit={handleSubmit}>
          <input
            name={"number"}
            value={address.number}
            placeholder={"Name"}
            readOnly
          // onChange={handleChange}
          />
          <input
            name={"street_address"}
            value={address.street_address}
            placeholder={"Street Address"}
            readOnly
          // onChange={handleChange}
          />
          <input
            name={"neighborhood"}
            value={address.neighborhood}
            placeholder={"Neighborhood"}
            readOnly
          // onChange={handleChange}
          />
          <input
            name={"county"}
            value={address.county}
            placeholder={"County"}
            readOnly
          // onChange={handleChange}
          />
          <input
            name={"city"}
            value={address.city}
            placeholder={"City"}
            readOnly
          // onChange={handleChange}
          />
          <input
            name={"state"}
            value={address.state}
            placeholder={"State"}
            readOnly
          // onChange={handleChange}
          />
          <input
            name={"zip_code"}
            value={address.zip_code}
            placeholder={"Zipcode"}
            readOnly
          // onChange={handleChange}
          />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App
