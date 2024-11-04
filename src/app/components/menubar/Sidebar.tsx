import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { ListItem } from "@mui/material";

const menuItems = {
  data: [
    {
      name: "Item1",
      url: "/item1",
    },
    {
      name: "Item2",
      url: "/item2",
    },
    {
      name: "Item3",
      children: [
        {
          name: "Child31",
          url: "/child31",
        },
        {
          name: "Child32",
          url: "/child32",
        },
        {
          name: "Child32",
          url: "/child32",
        },
      ],
    },
    {
      name: "Item4",
      children: [
        {
          name: "Child41",
          url: "/child41",
        },
        {
          name: "Child42",
          url: "/child42",
        },
        {
          name: "Child43",
          children: [
            {
              name: "Child431",
              url: "/child431",
            },
            {
              name: "Child432",
              url: "/child432,",
            },
            {
              name: "Child433",
              url: "/child433",
            },
          ],
        },
      ],
    },
  ],
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  links: {
    textDecoration: "none",
  },
  menuHeader: {
    paddingLeft: "30px",
  },
});

const MenuBar = () => {
  const classes = useStyles();
  const [openItems, setOpenItems] = useState({});

  // Toggles the open state of a menu item
  const handleClick = (item: string | number) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [item]: !prevOpenItems[item],
    }));
  };

  // Renders each menu item, including nested children
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderMenuItems = (children: any[]) => {
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem>
              <Link href={subOption.url} className={classes.links}>
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem onClick={() => handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {openItems[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openItems[subOption.name]} timeout="auto" unmountOnExit>
            {renderMenuItems(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div className={classes.list}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.list }}
      >
        <div>
          <List>
            <ListItem key="menuHeading" divider disableGutters>
              <ListItemText
                className={classes.menuHeader}
                inset
                primary="Nested Menu"
              />
            </ListItem>
            {renderMenuItems(menuItems.data)}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuBar;
