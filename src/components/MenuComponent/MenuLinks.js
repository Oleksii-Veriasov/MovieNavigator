import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import AccessibleIcon from "@material-ui/icons/Accessible";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {useStyles} from "./stylesMenu";
import {useTheme} from "@material-ui/core/styles";


const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));


// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ handleDrawerClose, open }) {
    const classes = useStyles();
    const theme = useTheme();

    return <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </div>
        <Divider/>
        <List>
            <Link component={RouterLink} to="/">
                <ListItem button key="main">
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <ListItemText primary="Top new movies"/>
                </ListItem>
            </Link>
            <Link component={RouterLink} to="/search">
                <ListItem button key="Starred">
                    <ListItemIcon><AccessibleIcon/></ListItemIcon>
                    <ListItemText primary="Search movies"/>
                </ListItem>
            </Link>
        </List>
        <Divider/>
        <List>
            <Link component={RouterLink} to="/about">
                <ListItem button key="main">
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <ListItemText primary="About"/>
                </ListItem>
            </Link>
        </List>
    </Drawer>
}
