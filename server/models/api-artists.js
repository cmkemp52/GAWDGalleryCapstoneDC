const db = require("../utilities/conn");

const allartists = async () => {
  try {
    const response = await db.any(`SELECT * FROM artists ORDER BY lastname`);
    return response;
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

const artistid = async id => {
  try {
    const response = await db.any(
      `SELECT * FROM artists WHERE artist_id=${id}`
    );
    return response[0];
  } catch (err) {
    return `Internal Database Error: ${err}`;
  }
};

module.exports = {
  allartists,
  artistid
};
