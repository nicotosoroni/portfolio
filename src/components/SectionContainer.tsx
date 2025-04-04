import { ReactNode } from 'react';

interface SocialPillProps {
  styles?: string;
  children?: ReactNode;
  id?: string;
}

const SectionContainer = ({ children, styles, id }: SocialPillProps) => {
  return (
    <section id={id} className={`w-full lg:w-[740px] mx-auto ${styles}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
