import Image from 'next/image';
import loadingGif from '../../../public/daftpunktocat-thomas.gif';
import { PropagateLoader } from 'react-spinners';

const Loading: React.FC = () => {
  return (
    <>
      <Image
        alt="loading daftpunktocat"
        src={loadingGif}
        width={400}
        priority
      ></Image>
      <PropagateLoader color={'#96B6C5'} size={10}></PropagateLoader>
    </>
  );
};

export default Loading;
