import { Application } from './Application';

const app = new Application();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3009;

app.start(PORT).catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});