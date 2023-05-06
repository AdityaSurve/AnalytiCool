import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="d" bgcolor="#2475" />
      <DashboardBox gridArea="e" bgcolor="#2475" />
      <DashboardBox gridArea="f" bgcolor="#2475" />
    </>
  );
};

export default Row2;
