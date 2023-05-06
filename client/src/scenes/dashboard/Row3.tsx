import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="g" bgcolor="#2475" />
      <DashboardBox gridArea="h" bgcolor="#2475" />
      <DashboardBox gridArea="i" bgcolor="#2475" />
      <DashboardBox gridArea="j" bgcolor="#2475" />
    </>
  );
};

export default Row2;
