import react, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function ButtonDialog() {
    const [open, setOpen] = useState(false);
    const [typeTicket, setTypeTicket] = useState('');
    const [numberTicket, setNumberTicket] = useState(0);
    console.log(numberTicket);

    const handleChange = (event: SelectChangeEvent) => {
        setTypeTicket(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="uec__buy_ticket">
            <Button variant="outlined" className="uec__buy" onClick={handleClickOpen}>
                <span className="uec__icon_ticket">
                    <ConfirmationNumberIcon />
                </span>
                <p>Buy ticket</p>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="uec__paid"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"To buy tickets"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className="uec_display_flex" id="alert-dialog-description">
                        <span className="uec__sign_label">Your balance: </span>
                        <span className="uec__sign_value">$9999</span>
                    </DialogContentText>
                    <Box sx={{ minWidth: 340, marginBottom: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type Ticket</InputLabel>
                            <Select
                                value={typeTicket}
                                label="Type Ticket"
                                onChange={handleChange}
                            >
                                <MenuItem value={20}>Normal - $20</MenuItem>
                                <MenuItem value={60}>Vip - $60</MenuItem>
                                <MenuItem value={100}>Special - $100</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', minWidth: 340 }}>
                        <ConfirmationNumberIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-number-ticket" label="Number ticket" variant="standard" onChange={(e)=>{setNumberTicket(parseInt(e.target.value))}}/>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ButtonDialog;