import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '../../assets/CloseIcon.png';
import StepperOneIcon from '../../assets/StepperOneIcon.png';
import StepperTwoIcon from '../../assets/StepperTwoIcon.png';
import HorizontalLine from '../../assets/HorizontalLine.png';
import ProfileImage from '../../assets/ProfileImage.png';
import MessageBoxIcon from '../../assets/MessageBoxIcon.png';
import '../../styles/client/client.css';

const AddClient = ({setShow}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(false);
    }
    return (
        <div className='header'>
            <img className='close-icon' src={CloseIcon} alt="CloseIcon" />
            <p className='client-heading'>Add Client</p>
            <div className='d-flex'>
                <img className='stepper-one-icon' src={StepperOneIcon} alt="StepperOneIcon" />
                <img className='horizontal-line' src={HorizontalLine} alt="HorizontalLine" />
                <img src={StepperTwoIcon} alt="StepperTwoIcon" />
            </div>
            <div className="d-flex">
                <p className='client-info'>Add Client Info</p>
                <p className='pet-info'>Add Pet Info</p>
            </div>
            <p className='main-title'>Client Information</p>
            <form onSubmit={handleSubmit}>
                <div className='row text-field-margin'>
                    <div className="col-sm-4">
                        <FormControl required >
                            <InputLabel className='mt-2 text-uppercase select-label'>Location</InputLabel>
                            <Select
                                label="Location*"
                                className='select-input'
                                name='location'
                            >
                                <MenuItem value="">
                                    <em>Select Location</em>
                                </MenuItem>
                                <MenuItem value="Option1">Option1</MenuItem>
                                <MenuItem value="Option2">Option2</MenuItem>
                                <MenuItem value="Option3">Option3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='firstname'
                            type='text'
                            className='w-100 mb-4 text-input'
                            required
                            label="FIRST NAME"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>

                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='lastname'
                            type='text'
                            className='w-100 text-input'
                            required
                            label="LAST NAME"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='email'
                            type='email'
                            className='w-100 text-input'
                            required
                            label="EMAIL"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>
                    <div className='col-sm-4'>
                        <TextField className='w-100 mb-4 text-input' variant="standard" required
                            name='workphone' label="WORK PHONE" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            InputProps={{
                                disableUnderline: true,
                            }} 
                            InputLabelProps={{
                                required: false
                              }}/>
                    </div>
                    <div className='col-sm-4'>
                        <TextField className='w-100 text-input' variant="standard" required
                            name='homephone' label="HOME PHONE" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            InputProps={{
                                disableUnderline: true,
                            }} 
                            InputLabelProps={{
                                required: false
                              }}/>
                    </div>
                    <div className='col-sm-4'>
                        <TextField className='w-100 text-input' variant="standard" required
                            name='mobileNumber' label="MOBILE NUMBER" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            InputProps={{
                                disableUnderline: true,
                            }} 
                            InputLabelProps={{
                                required: false
                              }}/>
                    </div>
                    <div className='col-sm-4'>
                        <TextField className='w-100 text-uppercase text-input' variant="standard" type='text' required
                            name='dateofBirth' label="Date of Birth"
                            InputProps={{
                                disableUnderline: true,
                            }} 
                            InputLabelProps={{
                                required: false
                              }}/>
                    </div>
                    <div className="col-sm-4">
                        <FormControl required >
                            <InputLabel className='mt-2 text-uppercase select-label' >Referral Resource</InputLabel>
                            <Select
                                label="Referral Resource*"
                                className='select-input'
                                name='location'
                                
                            >
                                <MenuItem value="">
                                    <em>Select Referral Resource</em>
                                </MenuItem>
                                <MenuItem value="Option1">Option1</MenuItem>
                                <MenuItem value="Option2">Option2</MenuItem>
                                <MenuItem value="Option3">Option3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="d-flex">
                    <img className='profile-image' src={ProfileImage} alt="ProfileImage" />
                    <div className="d-flex flex-column">
                        <p className='profile-text'>Add your profile Image</p>
                        <button className='profile-button'>
                            <p className='profile-button-text'>Choose</p>
                        </button>
                    </div>
                </div>

                <div className="row text-field-margin">
                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='address'
                            type='text'
                            className='w-100 mb-4 text-input'
                            required
                            label="ADDRESS"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>

                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='lastname'
                            type='text'
                            className='w-100 text-input'
                            required
                            label="ADDRESS"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <FormControl required >
                            <InputLabel className='mt-2 text-uppercase select-label'>State</InputLabel>
                            <Select
                                label="State*"
                                className='select-input'
                                name='State'
                            >
                                <MenuItem value="">
                                    <em>Select State</em>
                                </MenuItem>
                                <MenuItem value="Option1">Option1</MenuItem>
                                <MenuItem value="Option2">Option2</MenuItem>
                                <MenuItem value="Option3">Option3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='lastname'
                            type='text'
                            className='w-100 text-input'
                            required
                            label="CITY"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}

                        />
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='firstname'
                            type='text'
                            className='w-100 mb-4 text-input'
                            required
                            label="ZIP CODE"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>
                </div>
                <p className='emergency-contact-text'>
                    Emergency Contact Person Details
                </p>

                <div className='row text-field-margin'>
                    <div className="col-sm-4">
                        <TextField
                            name='name'
                            type='text'
                            className='w-100 mb-4 text-input'
                            required
                            label="NAME"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>

                    <div className="col-sm-4">
                        <TextField
                            name='email'
                            type='text'
                            className='w-100 text-input'
                            required
                            label="EMAIL"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>
                    <div className='col-sm-4'>
                        <TextField className='w-100 mb-4 text-input' required
                            name='phone' label="PHONE"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}/>
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            name='relationship'
                            type='text'
                            className='w-100 text-input'
                            required
                            label="RELATIONSHIP"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}
                        />
                    </div>

                    <div className="col-sm-4">
                        <TextField
                            name='profile-image'
                            type='text'
                            className='w-100 text-uppercase text-input child-profile-text'
                            required
                            label="Attach Parent Profile"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            InputLabelProps={{
                                required: false
                              }}

                        />
                    </div>
                </div>
                <p className='emergency-contact-text'>
                    Liability Waiver
                </p>
                <div className="footer-box">
                    <p className='footer-box-text'>I have voluntarily applied to participate in programs and activities at the Zoom Room.
                        I am aware that there are inherent risks and hazards involved in activitiith and around dogs,
                        and I am voluntarily participating in these activities with knowledge of potential dangers.
                        I am aware that any pet, regardless of training, handling, or environmental circumstance,
                        is capable of biting and I expressly acknowledge the risks therein. I further recognize,
                        acknowledge and agree that it is my sole decision whether to consult with a medical professional
                        and veterinarian prior to my pet’s and my participation in any Zoom Room programs and activities,
                        which Zoom Room recommends. I have either done so or have waived such advice and consent,
                        and I accept any and all risks. I further acknowledge that I have obtained all current
                        vaccinations for my pet(s) from a licensed veterinarian. In order to participate in programs
                        and activities, I, being fully informed of such risks and hazards, agree to assume all risks
                        of such occurrences. I am assuming all risk of personal injury, death, or disability to me or
                        my pet(s) that may result from participation, or any damage, loss or theft of any personal
                        property which I may incur. I understand that some local laws and ordinances require pets to
                        be registered and I hereby acknowledge that my pet(s) and the pet(s) of my agents, my family
                        members, my guests and/or invitees have been registered in accordance with local laws.

                        I understand that I and my pet(s) will be engaging in Zoom Room programs and activities, and
                        it is my voluntary and informed decision to release any future lawsuits or claims that I, my
                        family, any agent or my pet(s) may have or may have against Zoom Room, Inc. and its affiliates,
                        franchisees, instructors, officers, directors, agents, employees, and licensors as well as the
                        property owner and tenants of the property (collectively, “Zoom Room”). I hereby expressly agree to
                        release and forever discharge and hold harmless Zoom Room from any and all liability, claims, demands or
                        causes of action whatsoever arising out of any damage, loss, personal injury, or death to me, my children in
                        charge, or my pet(s), while participating in the Zoom Room programs and activities.
                        )</p>
                </div>
                <p className='signature-text'>by clicking this box you agree to Zoom Room’s liability waiver and terms and conditions.</p>
                <div className='d-flex'>
                    <img className='signature-box' src={MessageBoxIcon} alt="MessageBoxIcon" />
                    <button className='clear-button'><p className='clear-button-text'>Clear</p></button>
                </div>
                <button className='next-button' type='Submit'>
                    <p className='next-button-text'>Next</p>
                </button>
            </form>
        </div>
    );
}

export default AddClient;