import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        variant === 'default'
          ? 'bg-blue-100 text-blue-800'
          : 'border border-blue-500 text-blue-500'
      } ${className}`}
      {...props}
    />
  )
}