import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarWrapper = styled.div`
  width: 240px;
`;

const SidebarList = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SidebarItem = styled.li``;

const SidebarLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 10px;
`;

const Sidebar = () => {
  const sidebarDataArray = [
    {
      link: "/",
      text: "신발",
      sub: [
        { link: "/", text: "신상" },
        { link: "/", text: "스니커즈" },
        { link: "/", text: "구두" },
        { link: "/", text: "샌들/슬리퍼" },
        { link: "/", text: "부츠/워커" },
        { link: "/", text: "스포츠화" },
        { link: "/", text: "신발용품" },
        { link: "/", text: "패딩/퍼 신발" },
      ],
    },
  ];

  return (
    <SidebarWrapper>
      {sidebarDataArray.map((sidebarData, sidebarIndex) => (
        <SidebarList key={sidebarIndex}>
          <SidebarItem>
            <SidebarLink to={sidebarData.link}>{sidebarData.text}</SidebarLink>
            {sidebarData.sub && (
              <SidebarList>
                {sidebarData.sub.map((subData, subIndex) => (
                  <SidebarItem key={subIndex}>
                    <SidebarLink to={subData.link}>{subData.text}</SidebarLink>
                  </SidebarItem>
                ))}
              </SidebarList>
            )}
          </SidebarItem>
        </SidebarList>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;