"use client"

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  className,
  priority = false,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden relative', className)}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill
        className={cn(
          'object-cover duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
      />
    </div>
  );
}