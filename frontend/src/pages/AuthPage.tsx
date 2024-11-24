import { useState } from "react";
import Tab from "@components/Tab";
import { TAB_ITEM } from "../config/constants";
import SignupForm from "@components/auth/SignupForm";
import LoginForm from "@components/auth/LoginForm";

const Loginpage = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <Tab
        items={TAB_ITEM} // 정확히 전달
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Loginpage;

// TabContent 컴포넌트
const TabContent: React.FC<{ activeTab: number }> = ({ activeTab }) => {
  switch (activeTab) {
    case 1:
      return <LoginForm />;
    case 2:
      return <SignupForm />;
    default:
      return null;
  }
};
