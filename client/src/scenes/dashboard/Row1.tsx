import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  console.log("data : ", data);
  return (
    <>
      <DashboardBox gridArea="a" bgcolor="#2475" />
      <DashboardBox gridArea="b" bgcolor="#2475" />
      <DashboardBox gridArea="c" bgcolor="#2475" />
    </>
  );
};

export default Row1;
