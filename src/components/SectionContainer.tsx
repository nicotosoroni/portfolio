import { ReactNode } from 'react';

interface SocialPillProps {
  styles?: string;
  children?: ReactNode;
}

const SectionContainer = ({ children, styles }: SocialPillProps) => {
  return (
    <section className={`w-full lg:w-[740px] mx-auto ${styles}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
