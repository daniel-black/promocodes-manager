import './globals.css';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className='h-screen w-full bg-gray-600'>
        {children}
      </body>
    </html>
  );
}
