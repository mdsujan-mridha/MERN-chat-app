import { AlternateEmail as UsernameIcon, Face as FaceIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import moment from "moment"
function Profile() {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={"https://picsum.photos/200/300"} // your image url
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white"
        }}
      />
      <ProfileCard heading={"Bio"} text={"Transfer your idea intro inovative solution"} />
      <ProfileCard heading={"Username"} text={"sujanmridha"} Icon={<UsernameIcon />} />
      <ProfileCard heading={"Name"} text={"Sujan Mridha"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment('2024-01-04T18:00:00.000Z').fromNow()} Icon={<CalendarIcon />} />

    </Stack>
  )
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1" >{text}</Typography>
      <Typography variant='caption' color={"gray"}>{heading}</Typography>
    </Stack>
  </Stack>
)



export default Profile