import { ReactElement } from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4">Page Not Found</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Custom404;
