import React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Button } from '@/components/ui/button'

const AiRenderer = ({
  isDisabled,
  aiDescription,
}: {
  isDisabled?: boolean
  aiDescription: string
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" disabled={isDisabled} className="cursor-pointer border-blue-500">
          AI Summary
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-120 lg:max-h-150 lg:min-w-3xl overflow-auto mt-14 lg:mt-2">
        <AlertDialogHeader className="prose prose-p:my-2 prose-ul:my-1 prose:li:my-1 prose-ol:my-1 text-left w-full">
          <AlertDialogTitle>AI Summar</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              <Markdown remarkPlugins={[remarkGfm]}>{aiDescription}</Markdown>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="px-6 py-2.5 rounded-xl bg-red-500 text-white cursor-pointer mt-5">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AiRenderer
