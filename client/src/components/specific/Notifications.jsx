import { Avatar, Button, Dialog, DialogTitle, IconButton, ListItem, Skeleton, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { sampleNotifications } from '../../constants/sampleData';
import { Add as AddIcon } from '@mui/icons-material';

const Notifications = () => {

  const isLoading = false;
  const friendRequestHandler = ({ _id, accept }) => {

  }
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }}>
        <DialogTitle> Notifications </DialogTitle>
        {
          isLoading ? (<Skeleton />) :
            (<>
              {
                sampleNotifications.length > 0 ? (
                  sampleNotifications.map((i) =>
                    <NotificationsItem
                      key={i._id}
                      sender={i.sender}
                      handler={friendRequestHandler}
                    />)
                ) : (

                  <Typography textAlign={"center"}> 0 Notifications</Typography>
                )

              }
            </>)
        }
      </Stack>
    </Dialog>
  )
}

const NotificationsItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}

      >
        <Avatar src={avatar} />
        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} Send you Friend request`}
        </Typography>
        <Stack direction={{
          xs: "column",
          sm: "row"
        }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>

    </ListItem >
  )

})

export default Notifications