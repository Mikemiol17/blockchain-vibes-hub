const db = require('./db');

(async () => {
  try {
    const [rows] = await db.execute('SELECT 1 + 1 AS result');
    console.log('DB Connected:', rows[0].result);
  } catch (err) {
    console.error('Connection failed:', err);
  }
})();
