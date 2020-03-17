import { useState } from 'react';

export default function useAppModel(): {title: string} {
  const [title, setTitle] = useState<string>('helloworld');


  return {
    title,
  };
}
