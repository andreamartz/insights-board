import DashboardShell from '../../components/DashboardShell';

// return type is JSX.Element, but the modern preference is to omit this annotation unless the tsconfig or lint rules require it
const DashboardPage = () => {
  return (
    <>
      <DashboardShell></DashboardShell>
    </>
  );
}

export default DashboardPage;