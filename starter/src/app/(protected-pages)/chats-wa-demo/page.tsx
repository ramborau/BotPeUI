import ChatProvider from './_components/ChatProvider'
import ChatView from './_components/ChatView'
import ChatHistoryRenameDialog from './_components/ChatHistoryRenameDialog'
import getChatHistory from '@/server/actions/getChatHistory'

export default async function Page() {
    const chatHistory = await getChatHistory()
    return (
        <ChatProvider chatHistory={chatHistory}>
            <div className="h-full">
                <div className="flex flex-auto h-full">
                    <ChatView />
                    <ChatHistoryRenameDialog />
                </div>
            </div>
        </ChatProvider>
    )
}
