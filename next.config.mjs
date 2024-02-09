/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return[
            {
                source: '/transmutationcircles',
                destination: 'https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood',
                permanent: false
            },
            {
                source: '/pinatacloud',
                destination: 'https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
