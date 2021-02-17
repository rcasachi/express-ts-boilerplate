import { createConnection } from 'typeorm';

const Connection = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.error(err);
  }
};

export default Connection;
