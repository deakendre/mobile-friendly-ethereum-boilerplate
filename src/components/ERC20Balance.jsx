import { useMoralis } from "react-moralis";
import { useERC20Balance } from "../hooks/useERC20Balance";
import { Skeleton, } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
import { Table, Tag, Icon, Avatar, NativeBalance } from "web3uikit"
const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "white",
    textAlign: "start"
  },
};
function ERC20Balance(props) {
  const { assets } = useERC20Balance(props);
  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => (
        <img
          src={logo || "https://etherscan.io/images/main/empty-token.png"}
          alt="nologo"
          width="28px"
          height="28px"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => symbol,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, item) =>
        parseFloat(Moralis.Units.FromWei(value, item.decimals).toFixed(6)),
    },
    {
      title: "Address",
      dataIndex: "token_address",
      key: "token_address",
      render: (address) => getEllipsisTxt(address, 5),
    },
  ];

  return (
    <div style={{ width: "85vw", right:70, position:"relative" }}>
      <h1 style={styles.title}>💰Token Balances</h1>
      <Skeleton loading={!assets}>
    
         
        <Table style={{ right: 100, minWidth: 357 }}
           dataSource={assets}
          columns={columns}
          rowKey={(record) => {
            return record.token_address;
          }}
  alignCellItems="start"
  columnsConfig="80px 3fr 2fr 2fr 80px"
  data={[
  
  ]}
  header={[
    '',
    <span>Name</span>,
    <span>Type</span>,
    <span>Module</span>,
    ''
  ]}
  justifyCellItems="center"
  maxPages={3}
  noPagination
  onPageNumberChanged={function noRefCheck(){}}
  onRowClick={function noRefCheck(){}}
  pageSize={5}
/>
        />
      </Skeleton>
    </div>
  );
}
export default ERC20Balance;
