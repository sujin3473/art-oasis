const PageWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <section className="mt-[100px] px-[15%] py-5">{children}</section>;

export default PageWrapper;
