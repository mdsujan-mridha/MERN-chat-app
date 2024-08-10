import { AppBar, Badge, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../../constants/color'
import {
    Add as AddIcon,
    Group as GroupIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Search as SearchIcon
} from '@mui/icons-material'

const Header = () => {
    const handleMobile = () => {
        console.log("Mobile")
    }
    const openSearch = () => {
        console.log("Search")
    }
    const openNewGroup = () => {
        console.log("New Group")
    }
    const navigateToGroup = () => {
        console.log("Group")
    }
    const openNotification = () => {
        console.log("Notification")
    }
    const logoutHandler = () => {
        console.log("Logout")
    }
    return (
        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar position='static' sx={{ bgcolor: orange }}>
                <Toolbar>
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}> SHARE TALK </Typography>
                    <Box sx={{
                        display: { xs: "block", sm: "none" }
                    }}>
                        <IconButton color='inherit' onClick={handleMobile}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearch} />
                        <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />
                        <IconBtn title={"Manage Group"} icon={<GroupIcon />} onClick={navigateToGroup} />
                        <IconBtn title={"Notification"} icon={<NotificationsIcon />} onClick={openNotification} />
                        <IconBtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler} />
                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    )
};

const IconBtn = ({ title, icon, onClick, value }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {
                    value ? (
                        <Badge badgeContent={value} color='error'>{icon}</Badge>
                    ) : (icon)
                }
            </IconButton>
        </Tooltip>
    )

}

export default Header