import { createConnection } from 'typeorm';

const connection = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.error(err);
  }
};

export default connection;
