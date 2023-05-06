import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="a" bgcolor="#2475" />
      <DashboardBox gridArea="b" bgcolor="#2475" />
      <DashboardBox gridArea="c" bgcolor="#2475" />
    </>
  );
};

export default Row1;
