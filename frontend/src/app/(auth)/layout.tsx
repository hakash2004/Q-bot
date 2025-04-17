import "./layout.scss"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="login-layout-container">
        {children}
    </div>  
    </>
  );
}
