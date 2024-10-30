import React, { useEffect, useState } from "react";
import Options from "./Options";

const SearchComplete = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = (event) => {
    console.log(event.target.innerText);
    setSearchParams(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  };

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setFilteredUsers(filterData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    if (data && data.users && data.users.length) {
      setUsers(data.users.map((userItem) => userItem.firstName));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(users, filteredUsers);

  return (
    <>
      <div>
        <input
          value={searchParams}
          className="search-users"
          placeholder="Search Name Here..."
          onChange={handleChange}
        />
      </div>

      {showDropDown && <Options onclick={handleClick} data={filteredUsers} />}
    </>
  );
};

export default SearchComplete;
