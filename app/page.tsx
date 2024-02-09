import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Transmutation"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWPQhnTH7dPvt9R4zQZCoLuuirndAp6FddT84dPhXx9k8/transmutation-circle-0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Transmutation Circles',
  description: 'A frame exploring Transmutation Circles and acting as a Hello World',
  openGraph: {
    title: 'Transmutation Circles',
    description: 'A frame exploring Transmutation Circles and acting as a Hello World',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWPQhnTH7dPvt9R4zQZCoLuuirndAp6FddT84dPhXx9k8/transmutation-circle-0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Transmutation Circles - Hello World</h1>
      <p>Best viewed in Farcaster on Warpcaster</p>
    </>
  );
}
