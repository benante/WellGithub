import Image from 'next/image';
import loadingGif from '../../../public/daftpunktocat-thomas.gif';
import { PropagateLoader } from 'react-spinners';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <Image
        alt="loading daftpunktocat"
        src={loadingGif}
        width={400}
        priority
      ></Image>
      <PropagateLoader
        speedMultiplier={0.8}
        color={'#96B6C5'}
        size={10}
      ></PropagateLoader>
    </div>
  );
};

export default Loading;
