import React, { useState } from 'react'
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from "@mui/material"
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';

const Search = () => {
  const [users, setUsers] = useState(sampleUsers)
  const [isSearch, setIsSearch] = useState(true);
  const searchCloseHandler = (e) => {
    e.preventDefault()
    setIsSearch(prev => !prev)
  }

  const search = useInputValidation();

  const addFriendHandler = (id) => { console.log(id) }
  const isLoadingSendFriendRequest = false;

  return (
    <Dialog open={isSearch} onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle> Find People </DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {
            users.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}

              />
            ))
          }
        </List>

      </Stack>
    </Dialog>
  )
}

export default Search