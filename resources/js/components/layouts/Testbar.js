import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { TimePicker } from "@material-ui/pickers";

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const [selectedTime, setSelectedTime] = React.useState(new Date());

    const handleDateChange = date => {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        if (dd < 10) {
            dd = "0" + dd;
        }

        if (mm < 10) {
            mm = "0" + mm;
        }
        const tanggal = yyyy + "-" + mm + "-" + dd;
        console.log(tanggal);

        setSelectedDate(date);
        setSelectedTime(date.toLocaleTimeString("it-IT"));

        console.log(selectedTime);
        console.log(selectedDate);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/dd"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    ampm={false}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change time"
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
