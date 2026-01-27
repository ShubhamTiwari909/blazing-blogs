import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from '@/components/atoms/AlertDialog'
import { Button } from '@/components/atoms/button/Button'
import type { AiSummary } from './types'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AiRenderer = ({ aiSummary }: AiSummary) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer border-blue-500 text-blue-500">
          AI Summary
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="mt-14 max-h-120 overflow-auto lg:mt-2 lg:max-h-150 lg:min-w-3xl">
        <AlertDialogHeader className="prose prose-p:my-2 prose-ul:my-1 prose:li:my-1 prose-ol:my-1 w-full text-left">
          <AlertDialogTitle>AI Summary</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              <Markdown remarkPlugins={[remarkGfm]}>{aiSummary}</Markdown>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="mt-5 cursor-pointer rounded-xl bg-red-500 px-6 py-2.5 text-white">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AiRenderer
