import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Can`t load contacts");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/contacts", contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contact was added!");
      return response.data;
    } catch (error) {
      toast.error("Error adding contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contact was deleted!");
      return contactId;
    } catch (error) {
      toast.error("Error deleting contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
