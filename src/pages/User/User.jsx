import React from 'react';
import Dropdown from '../../components/Dropdown';
import Tabs from '../../components/Tabs';
import { useAuth } from '../../providers/AuthProvider';

const User = () => {
  const {
    state: { name, password },
  } = useAuth();

  return (
    <div className="center-horizontal">
      <Dropdown title="Please select" width="9.375rem">
        <Tabs
          width="210px"
          tabs={[
            {
              name: '版本',
              content: <p>版本號: 1.0.0</p>,
            },
            {
              name: '用戶資訊',
              content: (
                <div>
                  <p>用戶名稱: {name}</p>
                  <p>密碼: {password}</p>
                </div>
              ),
            },
          ]}
        />
      </Dropdown>
    </div>
  );
};

export default User;
