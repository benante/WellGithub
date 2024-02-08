import Image from 'next/image';
import loadingGif from '../../../public/daftpunktocat-thomas.gif';

const Loading: React.FC = () => {
  return (
    <Image alt="loading daftpunktocat" src={loadingGif} width={400}></Image>
  );
};

export default Loading;
