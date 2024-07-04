import React from "react";
import AddressCard from "./AddressCard/AddressCard";
import { Button, Grid, TextField, Box } from "@mui/material";
import { Form } from "react-router-dom";
import { useSubmit } from "react-router-dom";

function DeliveryAddressForm() {
  const handleSubmit=(e)=>{
    // to prevent page from refreshing by default
    e.preventDefault();
    
    const data = new FormData(e.currentTarget)
    console.log("address:: ",data)
  }
  
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 bordre-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "#9155fd" }}
              size="large"
              variant="contained"
            >
              {" "}
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="city"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="contactNumber"
                    name="contactNumber"
                    label="Contact Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{py:1.5, mt: 2, ml:35, bgcolor: "#9155fd" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressForm;
