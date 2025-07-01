import { WebSocketServer, WebSocket } from 'ws';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { Message as MessageModel } from './Message.js';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI!;


mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const app = express();
app.use(cors());

app.get('/messages', async (_req, res) => {
  try {
    const messages = await MessageModel.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`🚀 HTTP & WS server running on http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });

type Message = {
  user: string;
  text: string;
};

const messageSubject = new Subject<{ msg: Message; sender: WebSocket }>();

messageSubject
  .pipe(
    map(async ({ msg }) => {
      await MessageModel.create(msg);
      const data = JSON.stringify(msg);
      wss.clients.forEach((client: WebSocket) => {
          if (client.readyState === client.OPEN) {
            client.send(data);
          }
      });
    })
  )
  .subscribe();

wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (data) => {
    try {
      const parsed: Message = JSON.parse(data.toString());
      messageSubject.next({ msg: parsed, sender: ws });
    } catch (e) {
      console.error('Invalid message:', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});
