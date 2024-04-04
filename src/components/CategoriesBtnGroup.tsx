import { ButtonQuaternary } from '@/components';
import Image from 'next/image';

const btnContentClassName = "flex space-x-3 items-center -ml-10 md:ml-0";

export const CategoriesBtnGroup = () => {
  return (
    <div className="flex space-x-2 w-full">
      <ButtonQuaternary isSelected={false} onClick={() => console.log('Filter by all')}>
        All
      </ButtonQuaternary>
      <ButtonQuaternary
        isSelected
        isFullSize
        onClick={() => console.log('Filter by beer')}
      >
        <div className={btnContentClassName}>
          <div>
            <Image
              src="/images/beer.png"
              height={20}
              width={20}
              alt="Beer Icon"
            />
          </div>
          <span>Beer</span>
        </div>
      </ButtonQuaternary> 
      <ButtonQuaternary isFullSize onClick={() => console.log('Filter by Wine')}>
        <div className={btnContentClassName}>
          <div>
            <Image
              src="/images/wine-glass.png"
              height={20}
              width={20}
              alt="Wine Icon"
            />
          </div>
          <span>Wine</span>
        </div>
      </ButtonQuaternary>
    </div>
  );
};
