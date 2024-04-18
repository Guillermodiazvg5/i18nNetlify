import HeaderChat from './header-chat';
import EmptyChat from './empty-chat';
import LayoutChat from './layout-chat';
import ChatInput from './chat-input';
import IncomingMessage from './incoming-message';
import OutgoingMessage from './outgoing-message';
import { Button } from '@mitimiti/components/ui/button';

const ChatContainer = () => {
  return (
    <>
      <LayoutChat
        headerChat={() => (
          <HeaderChat buttonAction={() => <Button>Pide reserve</Button>} />
        )}
        footerChat={() => <ChatInput />}
      >
        <EmptyChat />
        <OutgoingMessage />
        <IncomingMessage />
      </LayoutChat>
    </>
  );
};

export default ChatContainer;
