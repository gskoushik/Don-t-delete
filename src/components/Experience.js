import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const steps = [
  {
    label: 'DevSecOps Full-Stack Engineer',
    duration: 'Jan 2021  −  Present  11 mos',
    location: 'Chennai Area, India',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'DevOps Full-Stack Engineer',
    duration: 'Oct 2019   −  Dec 2020 1 yr 2 mos',
    location: 'London, England, United Kingdom',
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Full-Stack Engineer',
    duration: 'May 2017   −  Sept 2019 2 yr 4 mos',
    location: 'Chennai Area, India',
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Lead System Engineer - Testing COE',
    duration: 'Jan 2016   −  May 2017 1 yr 4 mos',
    location: 'Chennai Area, India',
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`,
  },
];

function getMyExperience() {
  var diff = (new Date() - new Date("2016,01,16"));
  var time = (new Date() - new Date("2016,01,16")) / 1000;
  var year = Math.abs(((time / (60 * 60 * 24)) / 365.25));
  var month = Math.abs(Math.round(time / (60 * 60 * 24 * 7 * 4)));
  var days = Math.abs(Math.round(time / (3600 * 24)));
  return Math.floor(year) + " Year " + Math.round(month / 12) + " Months";
}

export default function Experience() {
  const [activeStep, setActiveStep] = React.useState(5);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="experience">
      <h4>Experience</h4>
      <table className="table">
        <tr className="tr">
          <td className="td" ><img src="img/tcs.jpg" alt="Smiley face" /></td>
          <td className="td" > Tata Consultancy Services </td>
        </tr>
        <p className="myexperience">{getMyExperience()}</p>
      </table>
      <div>

      </div>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <Typography className="duration" >{step.duration}</Typography>
              <Typography className="location" >{step.location}</Typography>
              {/* <Typography className="stepcontent" >{step.description}</Typography> */}
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  {/* <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div> */}
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
            {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button> */}
          </Paper>
        )}
      </Box>
    </div>
  );




  // return (
  //     <div className="experience">
  //     <h4>Experience</h4>
  //     <div className="content">
  //       <div className="exp-item">
  //         <div className="job">
  //           <a className="company" href="https://www.linkedin.com/company/dsccgc" target="_blank" rel="noopener noreferrer">Developer Student Clubs</a>
  //           <div className="duration">Aug 2019 &mdash; July 2020</div>
  //         </div>
  //         <div className="title">Lead</div>
  //         <ul className="description">
  //           <li>Developer Student Club powered by Google Developers is a platform to help solve the challenges university graduates were facing securing employment in the tech industry. </li>
  //           <li>DSC aims to provide students with the resources, opportunities and, experience necessary to be industry-ready, all while still pursuing their degrees. Google Developers supports and recognizes DSCs, but does not own or manage DSCs.</li>
  //           <li className="introduction">Organized both online and offline events throughout my working span, you can find  <a style={{fontWeight:500}} className="intro-p job-pls" href="https://drive.google.com/drive/folders/1x9a5LKxC3W6eP51qlgoAgXxPELwr1L5n?usp=sharing" target="_blank" rel="noopener noreferrer">detail of all the events here</a></li>
  //         </ul>
  //       </div>
  //       <div className="exp-item">
  //         <div className="job">
  //           <a className="company" href="https://www.linkedin.com/company/developercirclesfromfacebook" target="_blank" rel="noopener noreferrer">Facebook Developer Circle Chandigarh</a>
  //           <div className="duration">July &mdash; Dec 2015</div>
  //         </div>
  //         <div className="title">Campus representative</div>
  //         <ul className="description">
  //           <li>Organized events at campus on behalf of Facebook Developer Circle with all the team members</li>
  //           <li>Supported students by providing systematic learning resources</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // )
}
