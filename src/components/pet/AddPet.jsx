import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import CloseIcon from '../../assets/CloseIcon.png';
import StepperOneIcon from '../../assets/StepperOneIcon.png';
import CheckBoxIcon from '../../assets/CheckBoxIcon.png';
import HorizontalLine from '../../assets/HorizontalLine.png';
import ProfileImage from '../../assets/ProfileImage.png';
import '../../styles/pet/pet.css';
import '../../styles/client/client.css';


const AddPet = ({setShow}) => {
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
        950: '#003087',
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 489px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[950] : grey[950]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );

    const handlePrevious = () => {
        setShow(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Details Saved")
    }
    return (
        <div className='header'>
            <img className='close-icon' src={CloseIcon} alt="CloseIcon" />
            <p className='client-heading'>Add Pet</p>
            <div className='d-flex'>
                <img className='stepper-one-icon' src={CheckBoxIcon} alt="CheckBoxIcon" />
                <img className='horizontal-line' src={HorizontalLine} alt="HorizontalLine" />
                <img src={StepperOneIcon} alt="StepperOneIcon" />
            </div>
            <div className="d-flex">
                <p className='client-info'>Add Client Info</p>
                <p className='pet-info'>Add Pet Info</p>
            </div>
            <p className='main-title'>Pet Information</p>
            <form onSubmit={handleSubmit}>
                <div className='row text-field-margin'>
                    <div className="col-sm-4">
                        <TextField
                            variant="standard"
                            name='firstname'
                            type='text'
                            className='w-100 mb-4 text-uppercase text-input'
                            required
                            label="First name"
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
                            name='lastname'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="Last name"
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
                            name='birthday'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="Birthday"
                            placeholder='Enter Birthday'
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
                        <FormControl required >
                            <InputLabel className='mt-2 text-uppercase select-label' id="demo-simple-select-required-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                label="Gender"
                                className='select-input'
                                name='location'
                            >
                                <MenuItem value="">
                                    <em>Select Gender</em>
                                </MenuItem>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-sm-4">
                        <FormControl required >
                            <InputLabel className='ms-4 mt-2 text-uppercase select-label' id="demo-simple-select-required-label">
                                Acquisition source</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                label="Gender"
                                className='select-input'
                                name='location'
                            >
                                <MenuItem value="">
                                    <em>Select Gender</em>
                                </MenuItem>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-sm-4">
                        <FormControl required >
                            <InputLabel className='ms-4 mt-2 text-uppercase select-label' id="demo-simple-select-required-label">
                                Breed</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                label="Breed*"
                                className='select-input'
                                name='Breed'
                            >
                                <MenuItem value="">
                                    <em>Select Breed</em>
                                </MenuItem>
                                <MenuItem value="Option1">Option1</MenuItem>
                                <MenuItem value="Option2">Option2</MenuItem>
                                <MenuItem value="Option3">Option3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            name='Veterinarian'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="Veterinarian"
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
                            name='Allergies'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="Allergies"
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
                        <div className="d-flex">
                            <img src={ProfileImage} alt="ProfileImage" />
                            <div className="d-flex flex-column">
                                <p className='profile-text'>Add your profile Image</p>
                                <button className='profile-button'>
                                    <p className='profile-button-text'>Choose</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <FormLabel className='form-lable-margin' id="demo-row-radio-buttons-group-label">
                            Does your dog bark at other dogs when out on a walk or at you for attention?
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="Yes"
                            className='form-radio-button'
                        >
                            <FormControlLabel value="Yes" control={<Radio />} className='text-black' label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} className='text-black' label="No" />
                        </RadioGroup>
                        <FormLabel className='form-lable-margin' id="demo-row-radio-buttons-group-label">
                        Has your dog ever bitten a person or another dog, regardless or injury(not including nipping or play biting)? 
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="Yes"
                            className='form-radio-button'
                        >
                            <FormControlLabel value="Yes" control={<Radio />} className='text-black' label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} className='text-black' label="No" />
                        </RadioGroup>
                        <FormLabel className='form-lable-margin' id="demo-row-radio-buttons-group-label">
                        Do you believe your dog is able to skip basic obedience and take advanced classes or agility?
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="Yes"
                            className='form-radio-button'
                        >
                            <FormControlLabel value="Yes" control={<Radio />} className='text-black' label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} className='text-black' label="No" />
                        </RadioGroup>
                        <StyledTextarea
                            aria-label="minimum height"
                            minRows={4}
                            placeholder="Notes"
                            className='text-area-color'
                        />
                    </div>
                    <div className="col-sm-4">
                        <FormLabel className='form-lable-margin' id="demo-row-radio-buttons-group-label">
                            Is your dog afraid of stranger or certain groups of people?
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="Yes"
                            className='form-radio-button'
                        >
                            <FormControlLabel value="Yes" control={<Radio />} className='text-black' label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} className='text-black' label="No" />
                        </RadioGroup>
                        <FormLabel className='form-lable-margin' id="demo-row-radio-buttons-group-label">
                        Is your dog very possessive about his/her food or toys? 
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="Yes"
                            className='form-radio-button'
                        >
                            <FormControlLabel value="Yes" control={<Radio />} className='text-black' label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} className='text-black' label="No" />
                        </RadioGroup>
                        <FormLabel className='form-lable-margin' id="demo-row-radio-buttons-group-label">
                        Is your dog social?
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="Yes"
                            className='form-radio-button'
                        >
                            <FormControlLabel  value="Yes" control={<Radio />} className='text-black' label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} className='text-black' label="No" />
                        </RadioGroup>
                        <FormLabel className='form-checkbox-container' component="legend">COMPLETED</FormLabel>
                        <FormGroup>
                            <div className="d-flex form-checkbox-container form-checkbox">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="Orientation"/>
                                    }
                                    label="Orientation"
                                    className='text-black'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox name="Evaluation" />
                                    }
                                    label="Evaluation"
                                    className='text-black check-box-3'
                                    
                                />
                            </div>
                            <div className="d-flex form-checkbox-container form-checkbox">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="Agility" />
                                    }
                                    label="Agility"
                                    className='text-black'

                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox name="Tricks" />
                                    }
                                    label="Tricks"
                                    className='text-black check-box-4 '
                                />
                            </div>
                        </FormGroup>
                    </div>
                </div>

                <p className='vaccination-detail'>
                    Vaccination Details
                </p>
                <div className="row text-field-margin">
                    <div className="col-sm-4">
                        <TextField
                            name='lastname'
                            type='text'
                            className='w-100 text-uppercase mb-4 text-input child-profile-text'
                            required
                            label="Attach Child Profile"
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
                            name='Rabbis Expiration'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="Rabbis Expiration"
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
                            name='Bordetella Expiration'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="Bordetella Expiration"
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
                            name='DHPP Expiration'
                            type='text'
                            className='w-100 text-uppercase text-input'
                            required
                            label="DHPP Expiration"
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
                <button className='back-button' onClick={handlePrevious}>
                    <p className='back-button-text'>Back</p>
                </button>

                <button className='save-button' type='Submit'>
                    <p className='save-button-text'>Save</p>
                </button>
            </form>
        </div>
    );
}

export default AddPet;