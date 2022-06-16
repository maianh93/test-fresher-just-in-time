import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

import {
  DesktopOutlined,
  InboxOutlined,
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const items = [
  {
    label: <Link to="/">Home Page</Link>,
    key: "homepage",
    icon: <DesktopOutlined />
  }, 
  {
    label: "Contact",
    key: "contact",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/contact/lists">Contact List</Link>,
        key: "lists",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/contact/createnewcontact">Create New Contact</Link>,
        key: "createnewcontact",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/contact/approve">Approve contract</Link>,
        key: "approve",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/contact/approveuser">Approve User</Link>,
        key: "approveuser",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/contact/unblockcontract">Unblock Contract</Link>,
        key: "unblockcontract",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/contact/unblockuser">Unblock User</Link>,
        key: "unblockuser",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/contact/resetpinandpassword">Reset pin/password</Link>,
        key: "resetpinandpassword",
        icon: <AppstoreOutlined />
      }
    ]
  }, 
  {
    label: "Fee management",
    key: "feemanagement",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/feemanagement/setfee">Set fee</Link>,
        key: "setfee",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/feemanagement/transactionfee">Transaction fee</Link>,
        key: "transactionfee",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/feemanagement/setfeeshare">Set fee share</Link>,
        key: "setfeeshare",
        icon: <AppstoreOutlined />
      },
    ]
  },
  {
    label: "Limit management",
    key: "limitmanagement",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/limitmanagement/productlimit">Product limit</Link>,
        key: "spproductlimitend",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/limitmanagement/contractlimit">Contract limit</Link>,
        key: "contractlimit",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/limitmanagement/walletbalancelimit">Wallet balance limit</Link>,
        key: "walletbalancelimit",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: "Transaction",
    key: "transaction",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/transaction/transactionhistory">Transaction history</Link>,
        key: "transactionhistory",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/transaction/topuptoewallet">Top Up to E-wallet</Link>,
        key: "topuptoewallet",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/transaction/withdrawalfromewwallet">Withdrawal from E-wallet</Link>,
        key: "withdrawalfromewwallet",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/transaction/cashback">Cash back</Link>,
        key: "cashback",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/transaction/payroll">Payroll</Link>,
        key: "payroll",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/transaction/admintransaction">Admin transaction</Link>,
        key: "admintransaction",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/transaction/reversaltransaction">Reversal transaction</Link>,
        key: "reversaltransaction",
        icon: <AppstoreOutlined />
      }
    ]
  }, 
  {
    label: "System",
    key: "system",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/system/groupmanagement">Group management</Link>,
        key: "groupmanagement",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/system/usermanagement">User management</Link>,
        key: "usermanagement",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/system/systemparameter">System parameter</Link>,
        key: "systemparameter",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: "Report",
    key: "report",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/report/reportlist">Report List</Link>,
        key: "reportlist",
        icon: <MailOutlined />
      }
    ]
  },

];

  const MainMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <div className="main-menu">
          <Layout.Sider
            style={{ background: "white", minHeight: "100vh" }}
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
          >
            <Menu theme="light" mode="inline" items={items} />
          </Layout.Sider>
      </div>
    );
  }
  
  export default MainMenu;