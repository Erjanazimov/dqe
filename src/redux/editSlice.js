import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchEditBtn = createAsyncThunk(
    "groups/fetchEditBtn",
    async function(token, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${token.tokenState[0].auth_token}`
                },
                body: JSON.stringify(token.editGroupState)
            }

            const response = await fetch(`https://app1.megacom.kg:9090/task-manager/api/v1/group/update/${token.editGroupState.id}`, options);
            const data = await response.json();
            if (response.ok) {
                console.log(data)
            }
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const editSlice = createSlice({
    name: "edit",
    initialState: {

    },
    reducers: {

    }
})

export  const {editAdd} = editSlice.actions

export default editSlice.reducer;