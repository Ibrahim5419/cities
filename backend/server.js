import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise'; // Use the promise version

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Essential if you want to POST data later

// Create a Connection Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'finance',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Helper function to handle repeated query logic
const fetchData = async (res, tableName) => {
    try {
        // execute() is safer and faster for standard queries
        const [rows] = await pool.execute(`SELECT * FROM ${tableName}`);
        res.status(200).json(rows);
    } catch (error) {
        console.error(`Error fetching from ${tableName}:`, error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// --- Routes ---

app.get('/', (req, res) => {
    res.send('<h1>City Data API is Running</h1>');
});

// Route: AP Cities
app.get('/api/ap_cities', async (req, res) => {
    await fetchData(res, 'cities');
});

// Route: TG Cities
app.get('/api/tg_cities', async (req, res) => {
    await fetchData(res, 'tg_cities');
});

// Route: All India Cities (One per State)
app.get('/api/india_cities', async (req, res) => {
    await fetchData(res, 'india');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log(`📡 AP Data: http://localhost:${PORT}/api/ap_cities`);
    console.log(`📡 TG Data: http://localhost:${PORT}/api/tg_cities`);
});