import ChatContainer from '@mitimiti/pages/chat/chat-container';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chat Mitimiti App' },
    { name: 'description', content: 'Mitimiti App' },
  ];
};

export default function Chat() {
  return (
    <section className="h-screen overflow-hidden">
      <ChatContainer />
    </section>
  );
}
