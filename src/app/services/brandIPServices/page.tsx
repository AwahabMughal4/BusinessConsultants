import React from 'react';
import CheckCategory from '@/components/ui/CheckCategory'; // Assuming modified CheckCategory
import Wrapper from '@/components/shared/Wrapper';
const page = () => {
  return (
    <Wrapper>
      <CheckCategory category="brandIPServices" />
    </Wrapper>
  );
};

export default page;
