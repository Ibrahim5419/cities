// src/services/expenseService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw so the component can handle it if needed
  }
};