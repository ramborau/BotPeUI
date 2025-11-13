import ChatProvider from '@/../../demo/src/app/(protected-pages)/concepts/ai/chat/_components/ChatProvider'
import ChatView from '@/../../demo/src/app/(protected-pages)/concepts/ai/chat/_components/ChatView'
import ChatHistoryRenameDialog from '@/../../demo/src/app/(protected-pages)/concepts/ai/chat/_components/ChatHistoryRenameDialog'
import getChatHistory from '@/../../demo/src/server/actions/getChatHistory'

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
