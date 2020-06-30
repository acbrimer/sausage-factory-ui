import React, { Fragment } from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  icon: { minWidth: theme.spacing(5) },
  sidebarIsOpen: {
    paddingLeft: 25,
    transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
  },
  sidebarIsClosed: {
    paddingLeft: 0,
    transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
  }
}));

const SubMenu = ({ handleToggle, sidebarIsOpen, isOpen, name, icon, children, dense }) => {
  const classes = useStyles();

  const header = (
    <MenuItem dense={dense} button onClick={handleToggle}>
      <ListItemIcon className={classes.icon}>{isOpen ? <ExpandMore /> : icon}</ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {name}
      </Typography>
    </MenuItem>
  );

  return (
    <Fragment>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip title={name} placement="right">
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense={dense}
          component="div"
          disablePadding
          className={sidebarIsOpen ? classes.sidebarIsOpen : classes.sidebarIsClosed}>
          {children}
        </List>
        <Divider />
      </Collapse>
    </Fragment>
  );
};

SubMenu.propTypes = {
  handleToggle: PropTypes.func,
  sidebarIsOpen: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.object,
  children: PropTypes.object,
  dense: PropTypes.bool
};

export default SubMenu;
