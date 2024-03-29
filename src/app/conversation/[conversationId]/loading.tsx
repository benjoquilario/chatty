import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const Loading = () => {
  return (
    <div className="h-full lg:pl-[375px]">
      <div className="flex h-full flex-col">
        <div className="flex items-center space-x-4 px-4 py-3 sm:px-4 lg:px-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-[140px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex space-x-2">
            <Skeleton className="h-12 w-24" />
            <Skeleton className="justify-end" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-9 w-full rounded" />
        </div>
      </div>
    </div>
  )
}

export default Loading
