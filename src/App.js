import { useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/Users";
import Pagination from "./Components/Pagination";
import axios from "axios";
import { USER_PER_PAGE } from "./Utils/Constants";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // console.log(totalPages);
  // console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=50&nat=us"
      );
      // console.log(res);
      setLoading(false);
      setUsers(res.data.results);
      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => setPage(num);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="App">
      <h1>Pagination Demo</h1>
      <p>Page No: {page}</p>
      <hr />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            handleNext={handleNext}
            handlePrev={handlePrev}
            page={page}
          />
        </>
      )}
    </div>
  );
}

export default App;
