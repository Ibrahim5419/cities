import React, { useState } from 'react';

const ExpenseTable = ({ data, title }) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Sorting function
  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;

    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle order if same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="table-wrapper">
      <h3>{title}</h3>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => handleSort('population')}>
          Sort Population ({sortField === 'population' ? sortOrder : ''})
        </button>

        <button onClick={() => handleSort('pin_code')} style={{ marginLeft: "10px" }}>
          Sort PIN Code ({sortField === 'pin_code' ? sortOrder : ''})
        </button>
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>City Name</th>
            <th>Population</th>
            <th>PIN Code</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.name}</td>
              <td>{city.population?.toLocaleString()}</td>
              <td>{city.pin_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
