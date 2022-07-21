import { useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/Users";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
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
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Pagination Demo</h1>
      <hr />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
        </>
      )}
    </div>
  );
}

export default App;
