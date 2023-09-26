import Header from "../components/layout/Header";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * React component for displaying a list of employees.
 * @returns {JSX.Element} The Employees component JSX.
 */
const Employees = () => {
  // Get the employees list from Redux state
  const employeesList = useSelector((state) => state.employeesList);

  // Initialize the navigation function
  const navigate = useNavigate();

  // Define the columns for the data table
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Date of Birth", selector: (row) => row.dateOfBirth, sortable: true },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
  ];

  // Initialize the search state
  const [search, setSearch] = useState("");

  /**
   * Handles the search input change.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filter the data based on the search input
  const filteredData = employeesList
    .map((employee) => ({
      ...employee,
      department: employee.department?.toLowerCase(),
      state: employee.state?.toLowerCase(),
    }))
    .filter(
      (employee) =>
        employee.firstName?.toLowerCase()?.includes(search.toLowerCase()) ||
        employee.lastName?.toLowerCase()?.includes(search.toLowerCase()) ||
        employee.department?.includes(search.toLowerCase()) ||
        employee.state?.includes(search.toLowerCase()) ||
        employee.street?.toLowerCase()?.includes(search.toLowerCase()) ||
        employee.zipCode?.toLowerCase()?.includes(search.toLowerCase()) ||
        employee.dateOfBirth?.toLowerCase()?.includes(search.toLowerCase()) ||
        employee.startDate?.toLowerCase()?.includes(search.toLowerCase())
    );

  /**
   * Handles the "Go to Home" button click event.
   */
  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main>
        <div id="page-container">
          <div className="title-container">
            <h2 id="current-employee">Current Employees</h2>
          </div>
          <label id="search-bar" htmlFor="search">
            Search by Task:
            <input id="search" type="text" onChange={handleSearch} />
          </label>
          <DataTable columns={columns} data={filteredData} pagination />
          <section id="home-btn-section">
            <button className="btn redirect-btn" onClick={handleGoToHome}>
              Home
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Employees;
