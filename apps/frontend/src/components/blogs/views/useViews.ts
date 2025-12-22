"use client"
import { useCookies } from "react-cookie"
import { ViewsProps } from "./types"
import { useEffect, useState } from "react"
import { checkIfAlreadyViewed, getBlogView, updateBlogViews } from "@/components/blogs/views/helpers"
import { useMutation } from "@tanstack/react-query"

export const useViews = ({ id }: ViewsProps) => {
    const [cookies, setCookies] = useCookies()
  const [blogViews, setBlogViews] = useState(0)
  const {error, mutate} = useMutation({
    mutationFn: () => updateBlogViews({ id }),
    onSuccess: (data) => {
      setBlogViews(data.blogsCount)
      setCookies(`viewed-${id}`, 'true', {
        maxAge: 86400, // 24 hours in seconds
        path: '/', // Set path to root so it's accessible everywhere
        sameSite: 'strict',
      })
    },
  })
  useEffect(() => {
    if (checkIfAlreadyViewed({ id, cookies })) {
      getBlogView({ id }).then((data) => {
        setBlogViews(data.blogsCount)
      })
      return
    }
    mutate()
  }, [id, mutate, cookies])

  return { blogViews, error }
}