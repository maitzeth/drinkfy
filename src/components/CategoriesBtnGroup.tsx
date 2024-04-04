import { ButtonQuaternary } from '@/components';
import Image from 'next/image';

export const CategoriesBtnGroup = () => {
  return (
    <div className="flex space-x-2 w-full">
      <ButtonQuaternary isSelected={false} onClick={() => console.log('zzz')}>
        All
      </ButtonQuaternary>
      <ButtonQuaternary
        isFlexFull
        isSelected
        onClick={() => console.log('zzz')}
      >
        <div className="flex space-x-3 items-center -ml-10">
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
      <ButtonQuaternary isFlexFull onClick={() => console.log('zzz')}>
        <div className="flex space-x-3 items-center -ml-10">
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
