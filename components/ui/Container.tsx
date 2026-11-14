import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'wide'
  className?: string
}

export function Container({
  children,
  size = 'default',
  className = '',
  ...props
}: ContainerProps) {
  const maxWidthClass =
    size === 'narrow'
      ? 'max-w-4xl'
      : size === 'wide'
      ? 'max-w-7xl'
      : 'max-w-6xl'

  return (
    <div
      className={`w-full mx-auto px-5 sm:px-8 lg:px-12 ${maxWidthClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
