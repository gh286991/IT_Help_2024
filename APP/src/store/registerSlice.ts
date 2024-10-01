import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
    username: string;
    email: string;
    password: string;
    account: string;
}

interface RegisterState {
    error: string | null;
    success: boolean;
}

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async (userData: UserData, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const data = await response.json();
                return rejectWithValue(data.message || '註冊失敗，請稍後再試。');
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue('註冊時發生錯誤，請檢查您的網路連接。');
        }
    }
);

const initialState: RegisterState = {
    error: null,
    success: false,
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state) => {
                state.success = true;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action: PayloadAction<string | null>) => {
                state.error = action.payload;
            });
    },
});

export const { clearError } = registerSlice.actions;
export default registerSlice.reducer;